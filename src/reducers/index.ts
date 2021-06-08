import { combineReducers } from 'redux';

import users, { IUsersReducers } from './usersReducers';
import posts, { IPostsReducers } from './postsReducers';
import photos, { IPhotoReducers } from './photosReducers';
import comments, { ICommentsReducers} from './commentsReducers';

export default combineReducers({
    users,
    posts,
    photos,
    comments
})

export interface IState {
    users: IUsersReducers;
    posts: IPostsReducers;
    photos: IPhotoReducers;
    comments: ICommentsReducers;
}