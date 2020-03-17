import React from 'react';
import styled from 'styled-components';
import {variables} from '../variables';
import {connect} from 'react-redux';
import {handleInputsChange, handleSubmit, setFlag} from '../redux/actions'
//components
import Button from '../components/Button';

const Wrapper = styled.form`
    width:90%;
    min-height:350px;
    background:none;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    input{
        min-width:200px;
        min-height:30px;
        border-radius:5px;
        padding-left:5px;
    }
    textarea{
        min-width:200px;
        min-height:180px;
        border-radius:5px;
        padding:5px;
    }
    label{
        padding:5px 0;
        color:${variables.secondaryClr};
        font-size:${variables.mainFZ};
    }
    .btnBox{
        width:50%;
        max-width:180px;
        display:flex;
        justify-content:space-between;
        align-items:center;
    }
`;

const Form = (
    {
        handleInputChange = () => { },
        handleSubmit = () => { },
        setFlag = () => { },
        val = null
    }) => {

        const fnInputChange = e => {
            handleInputChange(e.target.name, e.target.value);
        }
        const fnSubmit = e => {
            e.preventDefault();
            const result = { 
                    title:`${val.title}`,
                    body: `${val.body}`
            };
            handleSubmit(result);
            handleInputChange('title', '');
            handleInputChange('body', '');
            setFlag(false);
        }

        const fnCancel = () => {
            setFlag(false);
        }

    return(
        <Wrapper onSubmit={fnSubmit}>
            <label>title</label>
            <input name='title' onChange={fnInputChange} value={val.title || ''}/>
            <label>text</label>
            <textarea name='body' onChange={fnInputChange} value={val.body || ''}/>
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
    handleSubmit: (obj) => dispatch(handleSubmit(obj)),
    setFlag: (bool) => dispatch(setFlag(bool)),
});

export default connect(STP, DTP,)(Form);