// all models will be placed here (model.js)

import mongoose,{mongo, Schema} from "mongoose";

// admin model
const AdminSchema = new Schema({
    usermame : {
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
})

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
        type : [String]
    },
    author : {
        type : mongoose.Types.ObjectId,
        ref : "Admin"
    }

})

const Admin = mongoose.models?.Admin || mongoose.model("Admin",AdminSchema);
const Member = mongoose.models?.Member || mongoose.model("Member",MemberSchema);
const Event = mongoose.models?.Event || mongoose.model("Event",EventSchema);
const Blog = mongoose.models?.Blog || mongoose.model("Blog", BlogSchema);

export {Admin,Member,Event,Blog};
