import {Type} from './types';

const initialState = {
    posts: null,
    mainTitle: 'Hi! this actuality blog!',
    singlePost:null

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DATA:
            return { 
                ...state,
                posts: action.payload
            };
        case Type.GET_POST:
            return { 
                ...state,
                singlePost: action.payload
            };
        default:
            return state;
    }
};
export default reducer;