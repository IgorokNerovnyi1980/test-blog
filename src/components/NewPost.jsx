import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import Form from './Form';

const Wrapper = styled.div`
    position:fixed;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    width:91%;
    height:auto;
    min-height:71vh;
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
            <Form />
        </Wrapper>
    )

};

export default NewPost;
