import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
//components
import List from '../components/List'

const Wrapper = styled.div`
    width:100vw;
    height:100vh;
    background-color:${variables.mainBG};
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`;
const Title = styled.h1`
    color:${variables.accentClr};
    font-size:${variables.h1FZ};
`;

const Base = (
    {
        content = null,
        mainTitle = 'default'
    }) => {
    return(
        
        <Wrapper>
            <Title>{mainTitle}</Title>
           <List posts={content} />
        </Wrapper>
    )
};
const STP = state => (
    {mainTitle: state.mainTitle}
);

// const DTP = dispatch => ({
//     getData: () => dispatch(getData()),
// });

export default connect(STP, null)(Base);