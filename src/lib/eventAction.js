import { Event } from "./models";
import { verifyToken } from "./adminAction";
import { NextResponse } from "next/server";
import { connectDB } from "./connectDB";

/* event addition, edit, delete (CRUD) */
export const createEvent = async (FormData) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    // taking out form data
    const eventData = Object.fromEntries(FormData.entries());

    const newEvent = new Event({
      title: eventData.title,
      desc: eventData.desc,
      images: eventData.images,
      eventDate: eventData.eventDate,
      location: eventData.location || "Patna,Bihar,India",
      registrationLink: eventData.registrationLink,
    });

    await newEvent.save();
    return NextResponse.json(
      {
        message: "New event is created successfully!!",
        success: true,
        data: newEvent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error creating new event : ", error);
    return NextResponse.json(
      {
        message: "Error creating new event",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const editEvent = async (FormData) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    const formData = Object.fromEntries(FormData.entries());

    const eventId = formData._id || formData.id;
    if (!eventId) {
      throw new Error("Event ID is required to update the event.");
    }

    const updatedEvent = await Event.findByIdAndUpdate(
      eventId,
      {
        title: formData.title,
        desc: formData.desc,
        images: formData.images,
        eventDate: formData.eventDate,
        location: formData.location || "Patna, Bihar, India",
        registrationLink: formData.registrationLink,
      },
      { new: true }
    );

    if (!updatedEvent) {
      throw new Error("Event not found!");
    }

    return NextResponse.json(
      {
        message: "Event updated successfully!",
        success: true,
        data: updatedEvent,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error editing the event : ", error);
    return NextResponse.json(
      {
        message: "Error editing the event",
        success: false,
      },
      { status: 500 }
    );
  }
};

export const deleteEvent = async (id) => {
  try {
    await connectDB();

    // throw error on unauthorized access
    const data = await verifyToken();
    if (!data.isVerified) {
      throw new Error("Unauthorized access !!");
    }

    const eventId = id;
    if (!eventId) {
      throw new Error("Event id is required !");
    }

    const event = await Event.findById(eventId);
    if (!event) {
      console.log("No event found");
      throw new Error("No event found !");
    }

    await Event.findByIdAndDelete(eventId);

    return NextResponse.json(
      {
        message: "Event deleted successfully!!",
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.log("Error deleting the event : ", error);
    return NextResponse.json(
      {
        message: "Error deleting the event",
        success: false,
      },
      { status: 500 }
    );
  }
};
