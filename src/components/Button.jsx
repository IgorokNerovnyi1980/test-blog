import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';

const Wrapper = styled.button`
    padding:5px 10px;
    border:1px solid ${props => props.color};
    background:none;
    border-radius:5px;
    color:${props => props.color};
    font-size:${variables.mainFZ};
    font-weight:bold;
    cursor: pointer;
    transition: 0.2s;
    :hover{
        color:${variables.secondaryClr};
        border:1px solid ${variables.secondaryBG};
    }
    :active{
        transform:scale(0.95);
    }
`;

const Button = (
    {
        label = 'default',
        fnClick = () => { },
        type = 'button',
        color = `${variables.accentClr}`
    }) => {
    return(
        <Wrapper 
            onClick={fnClick}
            type={type}
            color={color}
        >
            {label}
        </Wrapper>
    )
};

export default Button;