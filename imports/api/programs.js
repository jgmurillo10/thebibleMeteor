import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Meteor } from 'meteor/meteor';

export const ProgramsMongo = new Mongo.Collection('programs');
export const CoursesMongo = new Mongo.Collection('courses');
export const FilesMongo = new Mongo.Collection('files');

ProgramsMongo.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
CoursesMongo.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});
FilesMongo.deny({
  insert() { return true; },
  update() { return true; },
  remove() { return true; },
});

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
    else if(name ===''||description === ''|| url === ''){
      throw new Meteor.Error('invalid input, all fields must be filled')
    }

    ProgramsMongo.insert({
      _id: new Mongo.ObjectID(),
      name,
      description,
      url,
    });

  },
  'programs.getName'({program_id}){
     ProgramsMongo.find({_id: program_id}, {name:1, _id:0});
  },
  'courses.add'({ name, description, url, code, program_id }) {
    new SimpleSchema({
      name: { type: String },
      description: { type: String },
      url: { type: String },
      code: { type: String },
      program_id: { type: Mongo.ObjectID },
    }).validate({ name, description, url, code, program_id });
    if(name ===''||description === ''|| url === ''|| code === ''){
      throw new Meteor.Error('invalid input, all fields must be filled')
    }
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
    if(name ===''||size === ''|| drive_url === ''){
      throw new Meteor.Error('invalid input, all fields must be filled')
    }
    FilesMongo.insert({
      _id: new Mongo.ObjectID(),
      name,
      size,
      course_id,
      drive_url,
    });

  },
});
