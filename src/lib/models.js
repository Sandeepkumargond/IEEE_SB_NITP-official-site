// all models will be placed here (model.js)

import mongoose, {Schema} from "mongoose";

// admin model
const AdminSchema = new Schema({
    username : {
        type : String,
        required : [true, "Enter the username"]
    },
    password : {
        type : String,
        required : [true, "Enter the passowrd"]
    }
},{timestamps : true})

// member model
const MemberSchema = new Schema({
    name : {
        type : String,
        required : [true, "Enter member's mail"],
    },
    email : {
        type : String,
        required : [true, "Enter member's email"]
    },
    year : {
        type : Number,
        required : [true, "Enter member's year"]
    },
    designation :{
        type : String,
        required : [true, "Mention member's designation"]
    },
    role : {
        type : String,
        required : [true, "Enter member's role"]
    },
    contributions : {
        type : String
    },
    certificateNo : {
        type : String,
        unique : true,
        required : true
    },
    issuanceDate : {
        type : Date,
        default : Date.now
    },
    downloadUrl :{
        type : String,
        required : true,
    }

},{timestamps : true})

// event model
const EventSchema = new Schema({
    title : {
        type : String,
        required : true,
        unique : true
    },
    desc : {
        type : String,
        required : true
    },
    images : {
        type : [String],
        default : []
    },
    eventDate : {
        type : Date,
        required : true
    },
    location : {
        type : String,
    },
    registrationLink : {
        type : String,
        required : true,
        trim : true
    }
},{timestamps : true})

// blog model
const BlogSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    desc : {
        type : String,
        required : true,
    },
    images : {
        type : [String],
        default : []
    },
    author : {
        type : Schema.Types.ObjectId,
        ref : "Admin"
    }
},{timestamps : true})

const projectSchema = new Schema({
    title : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    members : [{
        type : Schema.Types.ObjectId,
        ref : "Member"
    }],
    supervisedBy : {
        type :  String,
        required : true
    },
    images : {
        type : [String],
        default : []
    }
},{timestamps : true})

const Admin = mongoose.models?.Admin || mongoose.model("Admin",AdminSchema);
const Member = mongoose.models?.Member || mongoose.model("Member",MemberSchema);
const Event = mongoose.models?.Event || mongoose.model("Event",EventSchema);
const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);
const Project = mongoose.models?.Project || mongoose.model("Project", projectSchema);

export {Admin,Member,Event,Blog, Project};
