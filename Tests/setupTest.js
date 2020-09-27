import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

jest.mock('next/config', () => () => ({
    publicRuntimeConfig: {
        API_KEY: process.env.API_KEY
      }
}));

configure({adapter: new Adapter()});