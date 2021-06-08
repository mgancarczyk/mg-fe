import { ISinglePost } from '../entities/posts';
import * as actionTypes from '../actions/actionTypes/postTypes';

export interface IPostsReducers {
    postsList: ISinglePost[];
}

const defaultState = (): IPostsReducers => ({
    postsList: []
});

export default (state = defaultState(), action: any) => {
    switch (action.type) {

        case actionTypes.GET_POSTS: {
            const payload: actionTypes.IPostTypes['GET_POSTS'] = action;
            return {
                ...state,
                postsList: payload.postsList
            }
        }

        default: {
            return state;
        }
    }
}