import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
//components
import Item from './Item';

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
`;

const List = (
    {
        posts = null
    }) => {

        return(
            <Wrapper>
                {posts ? posts.map(({id, title, body}) =>(
                    <Item 
                        key={id}
                        title={title}
                        body={body}
                        id={id}
                    />
                ))
                :
                    <p>Loading...</p>
                }
            </Wrapper>
        )
};

export default List;
