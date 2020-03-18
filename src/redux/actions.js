import axios from 'axios';
import {Type} from './types';
import {API} from '../constants'

function putValueRedirect(bool){
    return {type: Type.REDIRECT, payload: bool};
};

function putValueFlagPost(bool){
    return {type: Type.FLAG_POST, payload: bool};
};

function putValueFlagComment(bool){
    return {type: Type.FLAG_COMMENT, payload: bool};
};

function putNewTitle(str){
    return {type: Type.PUT_TITLE, payload: str};
};

function putNewBody(str){
    return {type: Type.PUT_BODY, payload: str};
};

function putNewComment(str){
    return {type: Type.PUT_COMMENT, payload: str};
};

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
            console.log('get post from Api')
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
            dispatch(putSinglePostInStore(result.data));
        }

    };
};

export const deleteSinglePost = function (id) {

    return async function (dispatch) {
        const result = await axios
            .delete(`${API.URL}/${id}`)
            .catch(error => {
                return error;
            });

        if (result.status === 200) {
           console.log(`delete post with id:${id}`)
        }

    };
};

export const handleInputsChange = (name, value) => {

    return function (dispatch){
        switch(name){
            case 'title':
                dispatch(putNewTitle(value));
                break
               case 'body':
                dispatch(putNewBody(value));
                break
            case 'comment':
                dispatch(putNewComment(value));
                break
            default:
                return;
        }
    }
   
    
};

export const handleSubmit = (obj) => {
    return async function () {
        const result = await axios
            .post(`${API.URL}`,obj)
            .catch(error => {
                return error;
            });

        if (result.status === 201) {
            console.log('create new Post');
            getData();
        }else{
            console.log('not created Post')
        }

    };
};

export const handleSubmitComment = (obj) => {
    console.log(obj);
    return async function () {
        const result = await axios
            .post(`${API.URL_CMT}`,obj)
            .catch(error => {
                return error;
            });

        if (result.status === 201) {
            console.log('create new Comment');
            getData();
        }else{
            console.log('not created Comment')
        }

    };
};


export const setFlagPost = (bool) => {
    return function (dispatch){
        dispatch(putValueFlagPost(bool));
        }
};

export const setFlagComment = (bool) => {
    return function (dispatch){
        dispatch(putValueFlagComment(bool));
        }
};

export const setRedirect = (bool) => {
    return function (dispatch){
        dispatch(putValueRedirect(bool));
        }
};

