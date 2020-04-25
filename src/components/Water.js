import React from "react";
import PropTypes from 'prop-types';
import { times } from 'lodash';

import styled from 'styled-components';
import waterImg from './images/water.png';
import waterTopImg from './images/water_top.png';
import { Block } from './Block';

const Water = styled(Block)`
    background-image: url(${waterImg});
    border:0;
    margin-left: 1px;
`;

const WaterTop = styled(Block)`
    background-image: url(${waterTopImg});
    border:0;
    margin-left: 1px;

`;

export const WaterContainer = ({water}) => {
    return (
        <div>
            {(water && water > 0)? <WaterTop/>: null}
            { times( water-1, () => <Water/>) }
        </div>
    );
};

WaterContainer.propTypes = {
    water: PropTypes.number
};
