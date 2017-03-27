import {Mongo, MongoInternals} from "meteor/mongo";

// var database = new MongoInternals.RemoteCollectionDriver("mongodb://127.0.0.1:3001/thebible");
export const ProgramsMongo = new Mongo.Collection("programs");
export const CoursesMongo = new Mongo.Collection("courses");
