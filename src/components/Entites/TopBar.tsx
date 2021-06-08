import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import {fontSize} from '../../styledHelpers/FontSizers';
import useDropdown from 'react-dropdown-hook';

import arrowDown from '../media/icons/arrow-down.svg';
import dot from '../media/icons/3dot.svg';
import cog from '../media/icons/cog.svg';
import publications from '../media/icons/publications.svg';
import plus from '../media/icons/plus.svg';

const Wrapper = styled.div`

`;

const TopLeft = styled.div`
    float: left;
    p{
        font-size:${fontSize[18]};
        font-weight: bold;
        color: gray; 
        float: left;
        display: fixed;
        margin: auto;
        position: relative;
    }
    img{
        margin-left: 1vw;
        height: 20px;
        width: 20px;
    }
`;
const TopRight = styled.div`
    float: right;
    p{
        font-size:${fontSize[18]};
        font-weight: bold;
        color: gray; 
        float: right;
        display: fixed;
        margin: auto;
        position: relative;
    }
    img{
        float: right;
        height: 20px;
        width: 20px;
        margin-left: 1vw;
        margin-right: 1vw;
        
    }
    span{
        font-size:${fontSize[18]};
        font-weight: bold;
        float: right;
        display: fixed;
        margin-top: 1vh;
        margin-right: 1vw;
        position: relative;
    }
`;

export const TopBar: FC = () => {
    const [isFiltre, setFiltre] = useState<boolean>(false);
    const [wrapperRef, dropdownOpen, toggleDropdown, closeDropdown] = useDropdown();

    return (
        <Wrapper>
            <TopLeft>
                <p>Entities</p>
                <img src={cog} />
                <br></br>
                <br></br>
                <p>All</p>
                <img src={arrowDown} />
                <img src={dot} />
                <img src={plus} onClick={toggleDropdown} />
            </TopLeft>
            <TopRight>
                <img src={plus} />
                <p>Mosaic</p>
                <img src={publications} />
                <br></br>
                <br></br>
                <span>
                    Followed
                    <img src={arrowDown} />
                </span> 
            </TopRight><br></br>
            
        </Wrapper>
    )
}
