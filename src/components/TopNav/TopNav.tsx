import React, { FC } from 'react';
import styled from 'styled-components';

import {Colors} from '../../styledHelpers/Colors';

import house from '../media/icons/house.png'
import comments from '../media/icons/comments.png'
import bell from '../media/icons/bell.png'
import logo from '../media/logo.png';

import { ExpandedManu} from './ExpandedManu';
import { Search } from './Seatch';


const Wrapper = styled.div`
  position: relative;
  display: flex;
  height: 50px;
  background-color: ${Colors.lightblue};

  align-items: center;

  box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
  z-index: 2;

`;

const RightIcons = styled.div`
  margin-left: auto;
  margin-right: 2vw;

  img{
    margin: 0 0.5vw;
  }
`;
const Logo = styled.img`
  margin-left: 1vh;
  height: 35px;
  width: 35px;
`;
const Not = styled.img`
  h1{

  }
`;
const Notification = styled.div`
  border-radius: 50%;
  background: red;
  color: white;
  width: 1.2vh;
  height: 1.2vh;
  text-align: center;
  font-size: 12px;
  position: absolute;
  top: 10px;
  right: 100px;
`;

export const TopNav : FC = () => {
  return(
    <Wrapper>
      <Logo alt="" src={logo} />
      <ExpandedManu />
      {/* <TopNavDropdown/> */}
      <Search/>
      <RightIcons>
        <img alt="house" src={house} />
        <img alt="comments" src={comments} />
        <Notification>1</Notification>
        <img alt="bell" src={bell} />
      </RightIcons>
      
    </Wrapper>
  );
};