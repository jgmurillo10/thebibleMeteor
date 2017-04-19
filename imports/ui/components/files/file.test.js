/* eslint-env mocha */

import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import File from './file.jsx';
// import {Program} from '../../../api/programs.test.js';

describe('File', () => {
  it('should render', () => {
    const filetest = Factory.create('filetest');
    const comp = shallow(<File file={filetest} />);

    //console.log(comp.debug());
    chai.assert.equal(comp.instance().props.file.name, 'TestFile');
    chai.assert.equal(comp.instance().props.file.drive_url, 'aws.com');

  });
});
