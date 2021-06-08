import React, {FC} from 'react';
import styled from 'styled-components';

import { TopWork } from './TopWork';
import { StartWorking } from './StartWorking';
import { ResumeWork } from '../HomePage/ResumeWork/ResumeWork';

const Wrapper = styled.div`
`;

export const Workspaces: FC = () => {
    return(
        <Wrapper>
            <TopWork />
            <StartWorking />
            <ResumeWork />
        </Wrapper>
    );
};