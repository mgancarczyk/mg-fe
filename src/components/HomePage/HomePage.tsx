import React, {FC} from 'react';
import { Workspaces } from './Workspaces/Workspaces';
import { LatestPublications } from './LatestPublications/LatestPublications';
import { ResumeWork } from './ResumeWork/ResumeWork';
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizers';

const P = styled.h1`
    font-size:${fontSize[22]};
    font-weight: bold;
    margin: 1vh 2vw;
    color: #998c84;
`;

export const HomePage: FC = () => {
    return(
        <div>
            <LatestPublications />
            <P>Workspaces</P>
            <Workspaces />
            <ResumeWork />
        </div>
    );
};