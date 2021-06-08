import { ISinglePhoto } from '../entities/photos';
import * as actionTypes from '../actions/actionTypes/photoTypes';

export interface IPhotoReducers {
    photosList: ISinglePhoto[];
}

const defaultState = (): IPhotoReducers => ({
    photosList: []
})

export default (state = defaultState(), action: any) => {
    switch(action.type) {

        case actionTypes.GET_PHOTOS: {
            const payload: actionTypes.IPhotoTypes['GET_PHOTOS'] = action;
            return {
                ...state,
                photosList: payload.photosList
            }
        }

        default: {
            return state;
        }
    }
}
