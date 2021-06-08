import React, {FC} from 'react';
import styled from 'styled-components';

import { TopBar } from './TopBar';
import { EntitiesComponents } from './EntitiesComponents';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    margin: 30px;
`;
const Div = styled.div`
    margin-top: 10px;
    th{
        border-style: solid 1px;
        width: 320px;
        height: 120px;
        margin: 10px;   
    }
    
`;
const Title = styled.div`

`;
export const Entites: FC = () => {
    return(
        <Wrapper>
            <TopBar />
            <EntitiesComponents />
        </Wrapper>
    );
};