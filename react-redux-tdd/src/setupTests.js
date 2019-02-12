const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
// import * as Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
