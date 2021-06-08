import React, { FC } from 'react';
import styled from 'styled-components';
import contract from '../../media/icons/contract.svg';
import people from '../../media/icons/people.svg';
import s from '../../media/s.jpg';
import { fontSize } from '../../../styledHelpers/FontSizers';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
  width: 40vh;
  //border-radius: 5px;
  box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
  background-color: white;
  
`;
const TopImage = styled.div`
  background-color: darkblue;
  min-height: 35%;
  //border-radius: 5px 5px 0 0;

  img{
    width: 100%;
    height: 100%;
  }
`;
const CenterPart = styled.div`
  display: flex;
  flex-direction: row;
  font-size: ${fontSize[22]};
  margin: -4vh 1vw 0 1vw;
  max-height: 40%;
  
  h1{
    margin: 5vh 1vw;
    font-weight: bold;
  }
`;
const RoundedImage = styled.div`
   background-color: white;
   padding: 2vh 1.5vw;
   //border-radius: 5px;
    max-width: 75px;
    max-height: 75px;
   
   box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
  img{
    width: 75px;
    height: 75px;
  }
`;

const BottomPart = styled.div`
  display: flex;
  flex-direction: row;
  margin: 2.5vh 2vw;
  font-size: ${fontSize[20]};
  align-items: center;
  span{
    display: flex;
    flex-direction: row;
    align-items: center;
    &:last-child{
      margin-left: 2vw;
    }
  }
  p{
    color: gray;
    margin-left: 0.5vw;
  }
  img{
    width: 25px;
    height: 25px;
  }
`;

const Footer = styled.div`
  margin: auto 1vw 1vh 1vw;
  color: gray;
`;

interface IWorkspacesItem {
  label: string;
  className?: string;
  type: string;
  users: number;
}

export const WorkspacesItem: FC<IWorkspacesItem> = (props) => {
  return (
    <Wrapper className={props.className}>
      <TopImage>
        <img src={s} />
      </TopImage>
      <CenterPart>
        <RoundedImage>
          <img src={contract} />
        </RoundedImage>
        <h1>{props.label}</h1>
      </CenterPart>

      <BottomPart>
        <span>
          <img src={contract} />
          <p>{props.type}</p>

        </span>
        <span>
          <img src={people} />
          <p>{props.users} Users</p>

        </span>
      </BottomPart>
      <Footer>
        <p>Last update 2 days ago</p>
      </Footer>
    </Wrapper>
  );
};

