import axios from 'axios';
import {Type} from './types';
import {AllPosts} from '../constants'



function putPostsInStore(arr) {
    return {type: Type.GET_DATA, payload: arr};
};



export const getData = function () {

    return async function (dispatch) {
        const result = await axios
            .get(AllPosts)
            .catch(error => {
                return error;
            });
            console.log(result)
        if (result.status === 200) {
            console.log('good')
            dispatch(putPostsInStore(result.data));
        }else{
            console.log('else')
        }

    };
};

