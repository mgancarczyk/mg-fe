import { stringify } from 'node:querystring';
import React, { FC, useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { ISinglePost } from '../../../entities/posts';
import { IState } from '../../../reducers';
import { IUsersReducers } from '../../../reducers/usersReducers';
import { IPhotoReducers } from '../../../reducers/photosReducers';

import { fontSize } from '../../../styledHelpers/FontSizers';
import { SmallAvatar } from '../../Common/SmallAvatar';



const Wrapper = styled.div`
    display: flex;
    margin: 0 1vw;
`;
const Image = styled.img`
    height: 100px;
    
`;
const RightSide = styled.div`
    display: flex;
    flex-direction: column;
    
    
    h1{
        font-size:${fontSize[20]};
        font-weight: bold;
        margin: 0.5vh 1vw 0 1vw;
        height: auto;
        width: 90%;
        margin-bottom: auto;

        

    }
    div{
        margin-top: auto;
        margin-bottom: 0.5vh;
        
        display:flex;
        align-items: center;
        overflow-wrap: break-word;
        p{
            margin: 0 0.5vw;
        }
        img{
            margin: 0 0.5vw;
        }
    }

`;

interface IDisplayWrapper {
    imgUrl: string | undefined
}
const DisplayWrapper = styled.div<IDisplayWrapper>`
   
    background-image: url(${(props) => props.imgUrl});
    background-size: contain;
    height: 100%;
    width: 100%;
    
    h1{
        
        font-size:${fontSize[20]};
        font-weight: bold;
        margin: 0.5vh 1vw 0 1vw;
        height: auto;
        width: 90%;
       

    }
`;





interface IPublicationLink {
    item: ISinglePost;
    displayPublication: boolean;
    className?: string;
}

export const PublicationLink: FC<IPublicationLink> = (props) => {


    const [date, setDate] = useState<Date>();

    const { usersList, photosList } = useSelector<IState, IUsersReducers & IPhotoReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    }));


    useEffect(() => {

        setDate(new Date());
    }, [])

    const getUser = (userId: number) => {
        let name;
        usersList.filter(item => {
            if (item.id === userId) {
                name = item.name;
            }
        })
        return name;
    }
    const todayDate = () => {
        return (
            <p>
                {date?.getDate()}
                {date?.toLocaleString('en-us', { month: 'short' })}
                {date?.getFullYear()}
            </p>
        )
    }



    return (
        <>
            {(props.displayPublication !== true) ?
                <Wrapper>
                    <Image src={photosList[props.item.id].thumbnailUrl} />
                    <RightSide>

                        <h1>{props.item.title}</h1>
                        <div>

                            {todayDate()}
                            <SmallAvatar src={photosList[props.item.userId].thumbnailUrl} />
                            {getUser(props.item.userId)}
                        </div>

                    </RightSide>
                </Wrapper>
                :
                <>
                    <DisplayWrapper className={props.className} imgUrl={photosList[props.item.id].url}>
                        <div></div>
                        <div>
                            <h1>{props.item.title}</h1>
                            <span>
                                {todayDate()}
                                <SmallAvatar src={photosList[props.item.userId].thumbnailUrl} />
                                <p>{getUser(props.item.userId)}</p>
                            </span>
                        </div>
                    </DisplayWrapper>
                </>
            }
        </>


    )
}
