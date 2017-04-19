/* eslint-env mocha */

import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import Program from './Program.jsx';
// import {Program} from '../../../api/programs.test.js';

describe('Program', () => {
  it('should render', () => {
    const programtest = Factory.create('programtest');
    const item = shallow(<Program program={programtest} />);
    // Tal vez se podría incluir algun assert con selectores de algo que se renderiza
    // en el componente
  //  console.log(item.debug());
    chai.assert.equal(item.instance().props.program.name, 'TestProgram');
    chai.assert.equal(item.instance().props.program.url, 'google.com');

    chai.assert.equal(item.instance().props.program.description, 'testing');
  });
});
