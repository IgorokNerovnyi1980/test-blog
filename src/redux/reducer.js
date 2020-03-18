import {Type} from './types';

const initialState = {
    posts: null,
    mainTitle: 'Hi! this actuality blog!',
    singlePost:null,
    inputValues:{
        title:'',
        body:'',
        comment:''
    },
    isShowForm: false,
    redirect:false,

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

        case Type.PUT_TITLE:
            return { 
                ...state,
                inputValues: {...state.inputValues, title:action.payload}
            };
        case Type.PUT_BODY:
            return { 
                ...state,
                inputValues: {...state.inputValues, body:action.payload}
            };
        case Type.PUT_COMMENT:
            return { 
                ...state,
                inputValues: {...state.inputValues, comment:action.payload}
            };
            
        case Type.FLAG:
        return { 
            ...state,
            isShowForm: action.payload
        }; 
        case Type.REDIRECT:
            return { 
                ...state,
                redirect: action.payload
            };
        default:
            return state;
    }
};
export default reducer;