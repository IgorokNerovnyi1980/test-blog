import axios from 'axios';
import {Type} from './types';
import {API, singlePost} from '../constants'



function putPostsInStore(arr) {
    return {type: Type.GET_DATA, payload: arr};
};

function putSinglePostInStore(obj){
    return{type:Type.GET_POST, payload:obj}
}



export const getData = function () {

    return async function (dispatch) {
        const result = await axios
            .get(API.URL)
            .catch(error => {
                return error;
            });
        if (result.status === 200) {
            dispatch(putPostsInStore(result.data));
        };

    };
};

export const getSinglePost = function (id) {

    return async function (dispatch) {
        const result = await axios
            .get(`${API.URL}/${id}`)
            .catch(error => {
                return error;
            });

        if (result.status === 200) {
            console.log('good');
            dispatch(putSinglePostInStore(result.data));
        }

    };
};

