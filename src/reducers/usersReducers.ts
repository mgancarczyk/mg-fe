import { ISingleUser} from '../entities/users';
import * as actionTypes from '../actions/actionTypes/userTypes';

export interface IUsersReducers {
    usersList: ISingleUser[];
}

const defaultState = (): IUsersReducers => ({
    usersList: []
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {
        
        case actionTypes.GET_USERS: {
            const payload: actionTypes.IUserTypes['GET_USERS'] = action;
            return {
                ...state,
                usersList: payload.usersList
            }
        }

        default: {
            return state;
        }
    }
}
