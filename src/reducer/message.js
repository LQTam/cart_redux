import * as types from './../constance/ActionTypes';
import * as messages from './../constance/Messages'
var initState = messages.MSG_WELCOME_TO_PAGE;

const message = (state = initState, action) => {
    switch (action.type) {
        case types.CHANGE_MESSAGE: {
            return action.message;
        }
        default: return state;
    }
}

export default message;