import React, { FC } from 'react';
import styled from 'styled-components'
import { WorkspacesItem } from './WorkspacesItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: -6vh;
    min-width: 80vw;
    max-width: 80vw;
    height: 50vh;
    align-items: center;
    justify-content: center;
`;
const SlideStyle = styled(Slider)`
    display: flex;
    //flex-direction: row;
    width: 100%;
`;
const Workspace = styled(WorkspacesItem)`
    margin: 1vh 0.5vw;
`;

export const Workspaces: FC = () => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 4,
        className: 'slider'
      };

    return (
        <Wrapper>
            <SlideStyle {...settings}>
                <Workspace label="Client contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Supplier contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Corporate" type="Corporate" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Group Norms" type="Norms" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Client contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Supplier contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Corporate" type="Corporate" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Group Norms" type="Norms" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Client contract" type="Contract" users={Math.floor(Math.random() * 101)} />
                <Workspace label="Supplier contract" type="Contract" users={Math.floor(Math.random() * 101)} />
            </SlideStyle>
        </Wrapper>

    );
};