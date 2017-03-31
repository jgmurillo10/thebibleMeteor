import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

// var database = new MongoInternals.RemoteCollectionDriver('mongodb://127.0.0.1:3001/thebible');
export const ProgramsMongo = new Mongo.Collection('programs');
export const CoursesMongo = new Mongo.Collection('courses');
export const FilesMongo = new Mongo.Collection('files');

Meteor.methods({
  'programs.add'({  name, description, url }) {
    new SimpleSchema({
      name: { type: String },
      description: { type: String },
      url: { type: String }
    }).validate({name, description, url });

    ProgramsMongo.insert({
      name,
      description,
      url
    });
  },

  'courses.add'({  name, description, url, code, program_id }) {
    // var _id = new Mongo.ObjectID;
    new SimpleSchema({
      _id:{ type: Mongo.ObjectID },
      name: { type: String },
      description: { type: String },
      url: { type: String },
      code: { type: String },
      program_id: { type: Mongo.ObjectID },
    }).validate({ name, description, url,code, program_id });

    CoursesMongo.insert({
      _id,
      name,
      description,
      url,
      code,
      program_id
    });
  }







});
