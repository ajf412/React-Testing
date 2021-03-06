import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from '../components/Button/Button';

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Button />, div);
  });

  it('should not differ from snapshot', () => {
    let props = { name: 6, orange: false, wide: false, };
    let element = shallow(<Button />);
    expect(element).toMatchSnapshot();
  });

  it('should call clickHandler with specified button name', () => {
    
    let props = { name: '6'};
    const component = shallow(<Button {...props} />);
    const instance = component.instance();
    const button = component.find('.component-button');

    // expect(button.props.name).toEqual('6');
  })
});