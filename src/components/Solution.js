import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { get } from 'lodash';
import styled from 'styled-components';

import CONTANSTS from '../actions/constants';
import { WaterAlgorithm } from '../util/algorithm';
import { Tower } from './Tower';

const SolutionContainer = styled.div`
  margin:10px;
  border: 1px solid lightgray;
  padding:10px;
  display: inline-block;
  box-shadow: 10px 10px 5px #888888;
  
  h3{
    font-size: 16px;
    font-weight: 300;
  }
`;

const Solution = ({status, towers}) => {
    const display = (status === CONTANSTS.VALID_STATUS && towers.length > 0);
    if (!display) return null;

    const { waterCollected: solution, waterLevelsArr } =  WaterAlgorithm.calculate(towers);
    return (
        <SolutionContainer>
            <h3>The provided towers array is: [{towers.toString()}]</h3>
            <h3>The solution is: <b>{solution}</b> gallons of water</h3>
            <div className={'drawing'}>
            {towers.map((height, index) =>
                <Tower height={height} water={waterLevelsArr[index]} key={index}/>
            )}
            </div>
        </SolutionContainer>
    );
};

Solution.propTypes = {
    towers: PropTypes.array,
    status: PropTypes.string
};

const mapStateToProps = state => ({
    status: get(state, 'status'),
    towers: get(state,'input', [])
});


export default connect(
    mapStateToProps,
)(Solution);
