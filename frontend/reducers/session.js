import {RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER} from '../actions/session';

// blank js object, returns nil if no current user
const _nullSession = {
    current_user = nil
};

export default (state = _nullSession, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {current_user: action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return state;
    }
}