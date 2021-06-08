import { ISingleComment } from '../entities/comments';
import * as actionTypes from '../actions/actionTypes/commentTypes';

export interface ICommentsReducers {
    commentsList: ISingleComment[];
}

const defaultState = (): ICommentsReducers => ({
    commentsList: []
});

export default (state = defaultState(), action:any) => {
    switch (action.type) {
        case actionTypes.GET_COMMENTS: {
            const payload: actionTypes.ICommentTypes['GET_COMMENTS'] = action;
            return {
                ...state,
                commentsList: payload.commentsList
            }
        }

        default: {
            return state;
        }
    }
}