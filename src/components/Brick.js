import React from "react";
import styled from 'styled-components';
import brickImg from './images/brick.png';
import { Block } from './Block';

export const Brick = styled(Block)`
    background-image: url(${brickImg});
    background-size: 60px 40px;
    background-repeat: no-repeat;
`;

