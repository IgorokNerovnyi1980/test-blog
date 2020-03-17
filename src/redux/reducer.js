import {Type} from './types';

const initialState = {
    posts: null,

};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Type.GET_DATA:
            return { 
                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
};
export default reducer;