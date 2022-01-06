import { getAuthStorage } from '../services/Storage'
import ROUTER_PATH from './RouterPath'

const authData = getAuthStorage();

const token = authData ? JSON.parse(authData).auth_token : '';

export default {
    GLOBAL_VAR: {
        token,
    },
    ROUTER_PATH,
}
