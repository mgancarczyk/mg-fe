import React, { FC } from 'react';
import styled from 'styled-components';

import {fontSize} from '../../styledHelpers/FontSizers';

import search from '../media/icons/search.png'

const SearchWrapper = styled.div`
    display: flex;
    border: 2px solid gray;
    width: 40vw;
    border-radius: 5px;
    height: 50%;
    align-items: center;
    background-color:white;
    img{
        margin: 0 0.5vh;
    }
`;
const SearchBar = styled.input`
    background-color: transparent;

    font-size: ${fontSize[18]} ;
    margin: 0 0.2vw;
    height: 90%;
    width: 100%;
    
    border: none;
    outline: none;
    

`;

export const Search: FC  = () => {
    return(
        <SearchWrapper>
            <SearchBar type="text" />
            <img alt="" src={search} />
        </SearchWrapper>
    );
};

