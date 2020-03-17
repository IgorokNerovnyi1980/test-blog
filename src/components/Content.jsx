import React from 'react';
import styled from 'styled-components';
// import {NavLink} from 'react-router-dom';
import {variables} from '../variables';

const Wrapper = styled.div`
    width:90%;
    height:auto;
    min-height:70vh;
    padding-top: 10px;
    border-radius:5px;
    background-color:${variables.accentBG};
    display:flex;
    flex-direction:column;
    justify-content:flex-start;
    align-items:center;
    h1{   
        margin-left:10px;
        font-size:${variables.titleFZ};
        font-weight:bold;
        color:${variables.titleClr};
    }
    p{
        max-width:80%;
        margin-left:10px;
        font-size:${variables.mainFZ}; 
        color:${variables.textClr};
    }
`;

// const WrapLink = styled(NavLink)`
//      text-decoration:none; 
// `;

const Content = (
    {
        title = '',
        text = '',
    }) => {

    return(
        <Wrapper>
            <h1>{title}</h1>
            <p>{text}</p>
        </Wrapper>
    )

};

export default Content;
