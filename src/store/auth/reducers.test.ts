import { authReducer } from './reducers';

describe('todos reducer', () => {
  it('should handle initial state', () => {
   expect(
        authReducer(undefined, { data: [], errors: {}, type: '' }),
     ).toEqual([]);
  });
});
