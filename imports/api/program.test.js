/* eslint-env mocha */

import { Meteor } from 'meteor/meteor';
import {chai } from 'meteor/practicalmeteor:chai';
import { Factory } from 'meteor/dburles:factory';
import { resetDatabase } from 'meteor/xolvio:cleaner';
import faker from 'faker';
import {ProgramsMongo} from './programs.js';

Factory.define('programtest', ProgramsMongo, {

  name:()=>'ISIS',
  description:()=> 'testing',
  url: ()=>'google.com'
});
