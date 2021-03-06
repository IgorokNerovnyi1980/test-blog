import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import FormPost from './FormPost';

const Wrapper = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    padding-top: 10px;
    border-radius:5px;
    background-color:${variables.mainBG};
    display:flex;
    justify-content:center;
    align-items:center;
   
`;

const NewPost = () => {

    return(
        <Wrapper>
            <FormPost />
        </Wrapper>
    )

};

export default NewPost;
