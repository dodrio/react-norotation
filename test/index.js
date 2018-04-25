import test from 'ava';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import browserEnv from 'browser-env';

import NoRotation from '../src';

configure({ adapter: new Adapter() });
browserEnv();

test('general usage', t => {
  const wrapper = shallow(<NoRotation />);
  t.is(wrapper.contains(<div />), true);
});
