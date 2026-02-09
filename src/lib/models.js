// all models will be placed here (model.js)

import mongoose, { Schema } from "mongoose";

// admin model
const AdminSchema = new Schema({
    username: {
        type: String,
        required: [true, "Enter the username"]
    },
    password: {
        type: String,
        required: [true, "Enter the passowrd"]
    }
}, { timestamps: true })

// member model
const MemberSchema = new Schema({
    name: {
        type: String,
        required: [true, "Enter member's mail"],
    },
    email: {
        type: String,
        required: [true, "Enter member's email"]
    },
    year: {
        type: Number,
        required: [true, "Enter member's year"]
    },
    designation: {
        type: String,
        required: [true, "Mention member's designation"]
    },
    team: {
        type: String,
        required: [true, "Enter member's team"]
    },
    githubLink: {
        type: String,
    },
    linkedInLink: {
        type: String,
    },
    contributions: {
        type: String
    },
    certificateNo: {
        type: String,
        unique: true,
        required: true
    },
    certificateIssued: {
        type: Boolean,
        default: false
    },
    issuanceDate: {
        type: Date,
        default: null
    },
    downloadUrl: {
        type: String,
        required: true,
    },
    profilePic: {
        type: [String],
        default: []
    }

}, { timestamps: true })

// event model
const EventSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        required: true
    },
    images: {
        type: [String],
        default: []
    },
    eventDate: {
        type: Date,
        required: true
    },
    location: {
        type: String,
    },
    registrationLink: {
        type: String,
        required: true,
        trim: true
    }
}, { timestamps: true })

// blog model
const BlogSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    images: {
        type: [String],
        default: []
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: "Admin"
    }
}, { timestamps: true })

const ProjectSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    repo: {
        type: String,
        trim: true,
        lowercase: true,
        required: true
    },
    images: {
        type: [String],
        default: []
    }
}, { timestamps: true })

// Lead model (for storing leads year-wise 2017-2026)
const LeadSchema = new Schema({
    name: {
        type: String,
        required: [true, "Enter lead's name"]
    },
    designation: {
        type: String,
        required: [true, "Enter lead's designation"]
    },
    year: {
        type: Number,
        required: [true, "Enter lead's year"]
    },
    githubLink: {
        type: String,
        default: ""
    },
    linkedInLink: {
        type: String,
        default: ""
    },
    profilePic: {
        type: [String],
        default: []
    }
}, { timestamps: true })

const Admin = mongoose.models?.Admin || mongoose.model("Admin", AdminSchema);
const Member = mongoose.models?.Member || mongoose.model("Member", MemberSchema);
const Event = mongoose.models?.Event || mongoose.model("Event", EventSchema);
const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);
const Projects = mongoose.models?.Projects || mongoose.model("Projects", ProjectSchema);
const Lead = mongoose.models?.Lead || mongoose.model("Lead", LeadSchema);

export { Admin, Member, Event, Blog, Projects, Lead };
