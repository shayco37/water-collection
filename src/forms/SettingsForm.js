import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import styled from 'styled-components';

import CONSTANTS from '../actions';
import { reportError, submitValue } from '../actions';

const ErrorContainer = styled.div`
  color: red;
`;
export const Error = ({message}) =>
    <ErrorContainer className={'error'}><p>{message}</p></ErrorContainer>

Error.propTypes = {
    message: PropTypes.string.isRequired
}

const Form = styled.form`
  label{
    margin: 10px;
    font-weight: 300;
  }
  input{
    font-size: 12px;
    width: 200px;
  }
  button{
    border-radius: 5px;
    margin: 10px;
  }
`;
const SettingsForm = ({errorMessage, status = CONSTANTS.VALID_STATUS, submitValue, reportError}) => {

    let arrayInput = "";

    const validateInput = (input)  =>
        input.every((element) => (!isNaN(element) && element > 0 && element < 100));

    const handleSubmit = (event) => {
        event.preventDefault();
        const value = Array.from(arrayInput.value.split(","), x => Number(x));

        if (validateInput(value)) {
            submitValue(value);
        } else {
            reportError(value,
                "The provided input is invalid, please use array format with only numbers between 0-100 (e.g. 1,2,3,4,5)"
            )
        }
    }

    const invalidInput = (status === CONSTANTS.INVALID_STATUS);
    return (
        <Form name="main" className={'form'} onSubmit={handleSubmit}>
            <label htmlFor="towerArray">Please provide tower array</label>
            <input name="value" type="text"
                   ref={(input) => { arrayInput = input; }}
                   placeholder="e.g. 5,2,2,5"/>
            <button>Submit</button>
            {(invalidInput)?
                <Error message={errorMessage}></Error>:
                null
            }
        </Form>
    );
}

SettingsForm.propTypes = {
    submitValue: PropTypes.func.isRequired,
    reportError: PropTypes.func.isRequired,
    errorMessage: PropTypes.string,
    status: PropTypes.string
}

const mapStateToProps = state => ({
    status: get( state, 'status'),
    errorMessage: get(state, 'error')
});

const mapDispatchToProps= ({
    submitValue,
    reportError
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SettingsForm);
