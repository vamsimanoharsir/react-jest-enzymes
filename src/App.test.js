import { render, screen } from '@testing-library/react';
import App from './App';
import Enzyme,{shallow} from 'enzyme';



test('testing presence of learn react', () => {  //test case description
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);  //searches for this on the screen
  expect(linkElement).toBeInTheDocument();
});

test('testing h2 in app.js',()=>{
  render(<App/>);
  const linkElement=screen.getByText(/this is/i);
  expect(linkElement).toBeInTheDocument();
});


//we can also use shallow method for testing
//shallow method is used to render the single component that we are testing. 
//It does not render child components. In Enzyme version less than 3, 
//the shallow method does not have the ability to access lifecycle methods. 
//But in Enzyme version 3, we have this ability.

test('testing using shallow',()=>{
  const wrapper=shallow(<App/>)
  expect(wrapper.find('h2').text()).toContain('example')
})