/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import {chai, expect } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import faker from 'faker';
import {ProgramsMongo, CoursesMongo,FilesMongo} from './programs.js';
import { Random } from 'meteor/random';
import { Accounts } from 'meteor/accounts-base';


Factory.define('programtest', ProgramsMongo, {

  name:()=>'TestProgram',
  description:()=> 'testing',
  url: ()=>'google.com'
});

Factory.define('coursetest', CoursesMongo, {

  name:()=>'TestCourse',
  description:()=> 'testing2',
  url: ()=>'uniandes.com'
});

Factory.define('filetest', CoursesMongo, {

  name:()=>'TestFile',
  drive_url: ()=>'aws.com'
});

if (Meteor.isClient){
  describe('Accounts', function () {

    beforeEach(function () {
      resetDatabase();
    });

    it('should be able to create a user', function () {
      const pusername = faker.internet.userName();
      const pemail= faker.internet.email();
      const ppassword = 'password1234';

      const createUser = new Promise((resolve, reject) => {
        Accounts.createUser({
          username: pusername,
          email: pemail,
          password: ppassword,
        }, (error) => {
          if (error) {
            reject(error);
          } else {
            const newUser = Meteor.users.findOne();
            resolve(newUser);
          }
        });
      });
      return createUser.then(function (newUser) {
        expect(newUser).to.not.be.undefined;
        console.log(newUser);
        expect(newUser.username).to.equal(pusername);
      });
    });
  });

  describe('Program', function() {
    describe('add program', function () {
      beforeEach(function () {
        resetDatabase();
        console.log('hi');
      });
      it('should add a program', function () {
        const pname = faker.lorem.word();
        const pdescription =faker.lorem.sentence();
        const purl = faker.internet.url();
        //Faltaba ; al final
        Meteor.call('programs.add', {
         name: pname,
         description: pdescription,
         url: purl
         }
         );
         //console.log(ProgramsMongo.find());
        chai.assert.equal(ProgramsMongo.find().count(), 1);
      });
    });
  });

  describe('Course', function () {
    describe('add course', function () {
      beforeEach(function () {
        resetDatabase();
      });
      it('should add a course', function () {
        const courseName = faker.lorem.word();
        const pdescription =faker.lorem.sentence();
        const purl = faker.internet.url();
        const pcode = 'ISIS1234';
        const pprogram_id = new Mongo.ObjectID();
//name, description, url, code, program_id
//        Faltaba ; al final
        Meteor.call('courses.add', {
         name: courseName,
         description: pdescription,
         url: purl,
         code : pcode,
         program_id: pprogram_id
         }
         );
         //console.log(ProgramsMongo.find());
        chai.assert.equal(CoursesMongo.find().count(), 1);
      });
    });
  });

  describe('File', function () {
    describe('add file', function () {
      beforeEach(function () {
        resetDatabase();
      });
      it('should add a file', function () {
        const pname = faker.lorem.word();
        const pdrive_url=faker.internet.url();
        const psize = faker.random.number();
        const pcourse_id = new Mongo.ObjectID().toString();

        //Faltaba ; al final
        Meteor.call('files.add', {
         name: pname,
         drive_url: pdrive_url,
         size: psize,
         course_id: pcourse_id,
         }
         );
         //console.log(ProgramsMongo.find());
        chai.assert.equal(FilesMongo.find().count(), 1);
      });
    });
  });

}
