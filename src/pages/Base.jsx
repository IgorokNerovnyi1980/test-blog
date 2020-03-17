import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
//components
import List from '../components/List'

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:${variables.mainBG};
    display:flex;
    justify-content:center;
    align-items:center;
`;

const Base = (
    {
        content = null,
    }) => {
    return(
        <Wrapper>
           {content ? <List posts={content} /> : <p>No posts</p>}
        </Wrapper>
    )
};

export default Base;