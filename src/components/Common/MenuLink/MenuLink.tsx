import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { fontSize } from '../../../styledHelpers/FontSizers';



const Wrapper = styled.div`

    display: flex;

    text-decoration: none;

    margin: 1.5vh 1.5vw;
    
    font-size:${fontSize[20]};
    


    img{
        width: 20px;
        height: 20px;
        margin-right: 1.5vh;
    }
`;
const LinkS = styled(Link)`
    color: black;
    text-decoration: none;

    &:active{
        color: black;
    }
`;


interface IMenuLink {
    label : string,
    iconSrc : string,
    path: string,
    className?: string,
    toggled?: boolean
}

export const MenuLink: FC<IMenuLink>  = (props) => {
    return(
        <Wrapper className={props.className}>
            <img src={props.iconSrc} alt={props.label} />
            <LinkS to={props.path}>
                <p>{props.label}</p>
            </LinkS>
        </Wrapper>
    );
};

