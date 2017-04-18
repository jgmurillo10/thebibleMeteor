/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import {chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import faker from 'faker';
import {ProgramsMongo} from './programs.js';
import StubCollections from 'meteor/hwillson:stub-collections';
import { Random } from 'meteor/random';


StubCollections.stub(ProgramsMongo);

Factory.define('programtest', ProgramsMongo, {

  name:()=>'ISIS',
  description:()=> 'testing',
  url: ()=>'google.com'
});
describe('Programs', () => {
  describe('add program', function () {
    beforeEach(function () {
      resetDatabase();
    });
    it('should add a program', function () {
      const pname = faker.lorem.word;
      const pdescription =faker.lorem.sentence();
      const purl = faker.internet.url;

      Meteor.call('programs.add', {
       name: pname,
       description: pdescrition,
       url: purl;
       }

       chai.assert.equal(ProgramsMongo.find().count(), 1);


       })
    });
  });
});
