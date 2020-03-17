import React,{useEffect} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import {variables} from '../variables';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {getSinglePost} from '../redux/actions';
//components
import Content from '../components/Content';
import Button from '../components/Button';

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

const WrapLink = styled(NavLink)`
     text-decoration:none; 
`;

const Post = (
    {
        getSinglePost = () => { },
        singlePost = null

    }) => {
    const { id } = useParams();
    useEffect(() => {
        getSinglePost(id);
    },[]);//eslint-disable-line

        return(
        <Wrapper>
            <WrapLink to='/posts'>
                <Title>To main Page</Title>
            </WrapLink>
            
            {singlePost && 
            <Content
                title={singlePost.title}
                text={singlePost.body}
            />}
             <Button
                label='Add Comment'
            />
            
        </Wrapper>
        )
};

const STP = state => (
    {
      singlePost:state.singlePost
    }
);

const DTP = dispatch => ({
    getSinglePost : (id) => dispatch(getSinglePost(id))});

export default connect(STP, DTP,)(Post);
