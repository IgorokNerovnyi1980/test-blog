import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {
    handleInputsChange,
    handleSubmitComment,
    setFlagComment,
    getData} from '../redux/actions'
//components
import Button from './Button';

const Wrapper = styled.form`
    width:90%;
    min-height:150px;
    background:none;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    textarea{
        min-width:95%;
        min-height:100px;
        border-radius:5px;
        padding:5px;
    }    
    .btnBox{
        width:20%;
        min-width:50px;
        max-width:180px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`;

const FormComment = (
    {
        handleInputChange = () => { },
        handleSubmitComment = () => { },
        setFlagComment = () => { },
        getData = () => { },
        val = null,
        id = null
    }) => {

        const fnInputChange = e => {
            handleInputChange(e.target.name, e.target.value);
        }
        
        const fnSubmit = e => {
            e.preventDefault();
            const result = { 
                    postId:`${id}`,
                    body: `${val.comment}`
            };
            handleSubmitComment(result);
            handleInputChange('comment', '');
            setFlagComment(false);
            setTimeout( () => getData(), 1000)
            
        }

        const fnCancel = () => {
            setFlagComment(false);
        }

    return(
        <Wrapper onSubmit={fnSubmit}>     
             <textarea name='comment' onChange={fnInputChange} value={val.comment || ''}/>
            <div className="btnBox">
                <Button type='submit' label='Post'/>
                <Button label='Cancel' fnClick={fnCancel} />
            </div>
        </Wrapper>
    )

};

const STP = state => (
    {
      val: state.inputValues,
    }
);

const DTP = dispatch => ({
    handleInputChange: (name, value) => dispatch(handleInputsChange(name, value)),
    handleSubmitComment: (obj, id) => dispatch(handleSubmitComment(obj,id)),
    setFlagComment: (bool) => dispatch(setFlagComment(bool)),
    getData: () => dispatch(getData())
});

export default connect(STP, DTP,)(FormComment);
