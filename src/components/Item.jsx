import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Wrapper = styled.div`
    width:90%;
    margin-top:10px;
    min-height:30px;
    border:1px solid ${variables.secondaryBG};
    border-radius:5px;
    background-color:${variables.accentBG};
    display:flex;
    justify-content:flex-start;
    align-items:center;
    cursor:pointer;
    transition:0.2s ease;
    h3{   
        margin-left:10px;
        font-size:${variables.titleFZ};
        font-weight:bold;
        color:${variables.titleClr};
    }
    p{
        max-width:50%;
        margin-left:10px;
        font-size:${variables.mainFZ}; 
        color:${variables.textClr};
        white-space:nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    :active{
        transform:scale(0.98);
    }
`;

const Item = (
    {
        title = 'default',
        body = ''
    }) => {
    return(
        <Wrapper>
            <h3>{title}</h3>
            <p>{body}</p>
        </Wrapper>
    )
};

export default Item;
