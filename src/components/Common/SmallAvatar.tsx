import React, { FC } from 'react'
import styled from 'styled-components';

const Avatar = styled.img`
    width: 25px;
    height: 25px;
    border-radius: 50%;
`;

interface ISmallAvatar {
    src: string;
    className?: string;
}

export const SmallAvatar: FC<ISmallAvatar> = (props) => {
    return <Avatar className={props.className} src={props.src} />
    
}
