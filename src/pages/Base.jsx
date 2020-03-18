import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {setFlag} from '../redux/actions';
//components
import List from '../components/List';
import Button from '../components/Button';
import NewPost from '../components/NewPost';

const Wrapper = styled.div`
    width:100%;
    min-width:100vw;
    height:100%;
    min-height:100vh;
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
        mainTitle = 'default',
        setFlag = () => { },
        isNewPost = false
    }) => {

        const createNewPost = () => {
            setFlag(true);
        }

    return(
        
        <Wrapper>
            <Title>{mainTitle}</Title>
           <List posts={content} />
           <Button
                label='Add Article'
                fnClick={createNewPost}
            />
            {isNewPost && <NewPost /> }
        </Wrapper>
    )
};
const STP = state => (
    {
        mainTitle: state.mainTitle,
        isNewPost: state.isShowForm,
    }
);

const DTP = dispatch => ({
    setFlag: (bool) => dispatch(setFlag(bool)),
});

export default connect(STP, DTP)(Base);