import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../Home';
import { history } from '../../../index';

describe('Home component', () => {
  const wrapper = shallow(<Home history={history} />);
it('renders correctly', () => {
  expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('renders the video', () => {
    const video = wrapper.find('#bgvid');
    expect(video).toHaveLength(1);
  });
});
