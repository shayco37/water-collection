import React from "react";
import styled from 'styled-components';
import { times } from 'lodash';

import { Brick } from './Brick';
import { WaterContainer} from './Water';

const TowerContainer = styled.div`
    display: inline-block;
    margin-left: -1px;
`;

export const Tower = ({height, water}) => {
    return(
        <TowerContainer>
            <WaterContainer water={water}/>
            { times(height, () => <Brick/>) }
        </TowerContainer>
    );
};
