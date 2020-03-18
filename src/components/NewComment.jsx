import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import Form from './FormComment';

const Wrapper = styled.div`
    position:fixed;
    top:85%;
    left:50%;
    transform:translate(-50%, -50%);
    width:91%;
    height:150px;
    border-radius:5px;
    background-color:${variables.mainBG};
    display:flex;
    justify-content:center;
    align-items:center;
   
`;

const NewComment = ({id = null}) => {

    return(
        <Wrapper>
            <Form id={id} />
        </Wrapper>
    )

};

export default NewComment;
