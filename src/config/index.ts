import { getAuthStorage } from '../../services/Storage';
import ROUTER_PATH from './RouterPath';

const authData = getAuthStorage();

const token = authData ?? '';

console.log('authData', authData);

export default {
  GLOBAL_VAR: {
    token,
  },
  ROUTER_PATH,
};
