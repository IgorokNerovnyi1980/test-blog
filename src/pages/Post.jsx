import React,{useEffect} from 'react';
import {useParams} from "react-router-dom";
import styled from 'styled-components';
import {variables} from '../variables';
import {NavLink, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import {
    getSinglePost,
    deleteSinglePost,
    setRedirect,
    getData} from '../redux/actions';
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
    .btnBox{
        min-width:250px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
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
        deleteSinglePost = () => { },
        setRedirect = () => { },
        getData = () => { },
        singlePost = null,
        redirect = false

    }) => {
    const { id } = useParams();

    useEffect(() => {
        getSinglePost(id);
    },[]);//eslint-disable-line

    const handleDelete = () => {
        deleteSinglePost(id);
        setRedirect(true);
        setTimeout( () => getData(), 1000)
        setTimeout( () => setRedirect(false), 1000)
    };

        return(
            redirect 
            ? 
            <Redirect to='/posts'/>
            :
            <Wrapper>
            <WrapLink to='/posts'>
                <Title>To main Page</Title>
            </WrapLink>
            
            {singlePost && 
            <Content
                title={singlePost.title}
                text={singlePost.body}
            />}
            <div className="btnBox">
                <Button
                    label='Add Comment'
                />

                <Button
                    label='Delete Post'
                    color='red'
                    fnClick={handleDelete}
                />
            </div>
             
            
        </Wrapper>
        )
};

const STP = state => (
    {
      singlePost:state.singlePost,
      redirect:state.redirect
    }
);

const DTP = dispatch => ({
    getSinglePost : (id) => dispatch(getSinglePost(id)),
    deleteSinglePost: (id) => dispatch(deleteSinglePost(id)),
    setRedirect: (bool) => dispatch(setRedirect(bool)),
    getData: () => dispatch(getData()),
});

export default connect(STP, DTP,)(Post);
