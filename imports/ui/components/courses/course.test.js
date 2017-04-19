/* eslint-env mocha */

import { Factory } from 'meteor/dburles:factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import { sinon } from 'meteor/practicalmeteor:sinon';
import Course from './course.jsx';
// import {Program} from '../../../api/programs.test.js';

describe('Course', () => {
  it('should render', () => {
    const coursetest = Factory.create('coursetest');
    const comp = shallow(<Course course={coursetest} />);
    // Tal vez se podría incluir algun assert con selectores de algo que se renderiza
    // en el componente
    //console.log(comp.debug());
    chai.assert.equal(comp.instance().props.course.name, 'TestCourse');
    chai.assert.equal(comp.instance().props.course.url, 'uniandes.com');

    chai.assert.equal(comp.instance().props.course.description, 'testing2');
  });
});
