"use server";
import { Event } from "./models";
import { verifyToken } from "./adminAction";
import { NextResponse } from "next/server";
import { connectDB } from "./connectDB";

/* event addition, edit, delete (CRUD) */
export const createEvent = async ({
  title,
  desc,
  images,
  eventDate,
  location,
  registrationLink,
}) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      return {
        message: "Unauthorized access !!",
        success: false,
      };
    }

    const existingEvent = await Event.findOne({ title: title });
    if (existingEvent) {
      return {
        message: "An event with this title already exists.",
        success: false,
      };
    }

    const newEvent = new Event({
      title: title,
      desc: desc,
      images: images || [],
      eventDate: eventDate,
      location: location || "Patna,Bihar,India",
      registrationLink: registrationLink,
    });

    await newEvent.save();
    return {
      message: "New event is created successfully!!",
      success: true,
      data: newEvent,
    };
  } catch (error) {
    console.log("Error creating new event : ", error);
    return {
      message: "Error creating new event",
      success: false,
    };
  }
};

export const editEvent = async ({
  id,
  title,
  desc,
  images,
  eventDate,
  location,
  registrationLink,
}) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      return {
        message: "Unauthorized access !!",
        success: false,
      };
    }

    const eventId = id;
    if (!eventId) {
      return{
        message : "Event ID is required to update the event.",
        success : false
      };
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title: title,
        desc: desc,
        images: images || [],
        eventDate: eventDate,
        location: location || "Patna, Bihar, India",
        registrationLink: registrationLink,
      },
      { new: true }
    );

    if (!updatedEvent) {
      return {
        message: "Event not found!",
        success: false,
      };
    }

    return {
      message: "Event updated successfully!",
      success: true,
      data: updatedEvent,
    };
  } catch (error) {
    console.log("Error editing the event : ", error);
    return {
      message: "Error editing the event",
      success: false,
    };
  }
};

export const deleteEvent = async (id) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      return {
        message: "Unauthorized access !!",
        success: false,
      };
    }

    const eventId = id;
    if (!eventId) {
      return {
        message: "Event id is required !",
        success: false,
      };
    }

    const event = await Event.findById(eventId);
    if (!event) {
      console.log("No event found");
      throw new Error("No event found !");
    }

    await Event.findByIdAndDelete(eventId);

    return {
      message: "Event deleted successfully!!",
      success: true,
    };
  } catch (error) {
    console.log("Error deleting the event : ", error);
    return {
      message: "Error deleting the event",
      success: false,
    };
  }
};

export const fetchAllEvents = async() => {
  try {
    await connectDB();

    const events = await Event.find().sort({ eventDate: -1 });

    return {
      success: true,
      data: events,
    };
  } 
  catch (error) {
    console.error("Error fetching events:", error);
    return {
      success: false,
      message: "Failed to fetch events",
    };
  }
}