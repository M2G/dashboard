/* eslint-disable */
import Home from './Home';
import { render, screen } from '../../test-utils/test-utils';

describe('Home Container', () => {
  describe("Submitting form", () => {

    const data = [
      {
        "_id": "6237a814d7d983d4e78228c3",
        "created_at": "2021-11-21T15:46:44.533Z",
        "email": "oliver.garcia@university.com",
        "first_name": "Oliver",
        "last_name": "Garcia",
        "modified_at": "2021-11-22T15:46:44.533Z"
      }];

    const initialState = { auth: {
        data,
        loading: false,
      }, auth_global: {}, signup: {}, signin: {}, signout: {} };
    const options: any = { initialState };

    render(<Home />, options);

    test('should render', () => {
      screen.debug();

      // console.log('container', container)
    });
  });
});
