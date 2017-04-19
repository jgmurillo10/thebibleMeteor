import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export const ProgramsMongo = new Mongo.Collection('programs');
export const CoursesMongo = new Mongo.Collection('courses');
export const FilesMongo = new Mongo.Collection('files');

/* Bien por el uso de methods para manejar operaciones de las colecciones,
hay unos cuantos errores con eslint.*/

Meteor.methods({

  'programs.add'({ name, description, url }) {
    new SimpleSchema({
      name:        { type: String },
      description: { type: String },
      url:         { type: String },
    }).validate({ name, description, url });
    if (!Meteor.user()) {
      throw new Meteor.Error('not-authorized');
     }

    ProgramsMongo.insert({
      _id: new Mongo.ObjectID(),
      name,
      description,
      url,
    });
  },
  'courses.add'({ name, description, url, code, program_id }) {
    new SimpleSchema({
      name: { type: String },
      description: { type: String },
      url: { type: String },
      code: { type: String },
      program_id: { type: Mongo.ObjectID },
    }).validate({ name, description, url, code, program_id });
    CoursesMongo.insert({
      _id: new Mongo.ObjectID(),
      name,
      description,
      url,
      code,
      program_id,
    });
  },
  'files.add'({ name, size, course_id, drive_url }) {
    new SimpleSchema({
      name: { type: String },
      size: { type: Number },
      drive_url: { type: String },
    }).validate({ name, size, drive_url });
    FilesMongo.insert({
      _id: new Mongo.ObjectID(),
      name,
      size,
      course_id,
      drive_url,
    });
  },
});
