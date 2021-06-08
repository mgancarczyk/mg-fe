import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { ISinglePost } from '../../../entities/posts'
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizers';
import contract from '../../media/icons/contract.svg';
import entities from '../../../media/icons/entities.svg';
import { ISingleComment } from '../../../entities/comments';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPostsReducers } from '../../../reducers/postsReducers';
import { ICommentsReducers } from '../../../reducers/commentsReducers';
import { IUsersReducers } from '../../../reducers/usersReducers';




const Wrapper = styled.div`
    width: 100%;
    max-width: 78vw;


    display: flex;
    flex-direction: column;

    padding: 1vh 1vw;
    margin: 1vh 0;


    background-color: white;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);

    //border-radius: 5px;

`;
const Title = styled.h1`
    font-size: ${fontSize[22]};
    color:${Colors.linkBlue};
`;
const Content = styled.div`
    margin: 2vh 0;
    font-size:${fontSize[18]};
`;
const Footer = styled.div`
    display: flex;
    p{
        display:flex;
        align-items: center;
        
        color: ${Colors.strongerTextGray};

        &:last-child{
            color:${Colors.subtleTextGray};
        }
    }
    img{
        height: 1.7vh;
        width: 1.7vw;
    }
`;
const Dot = styled.div`
    display:flex;
    align-items: center;
    font-size: 6px;
    color:${Colors.subtleTextGray};
    margin: 0 1vw;
`;

interface ISingleResume {
    post: ISingleComment
}

export const SingleResume: FC<ISingleResume> = (props) => {

    const [user, setUser] = useState<string>();
    const [companyName, setCompanyName] = useState<string>();

    const { postsList, commentsList, usersList } = useSelector<IState, IPostsReducers & ICommentsReducers & IUsersReducers>(globalState => ({
        ...globalState.posts,
        ...globalState.comments,
        ...globalState.users
    }));

    useEffect(() => {
        let userId: number;
        postsList.map(item => {
            if (item.id === props.post.postId) {
                userId = item.userId;
            }
        })
        usersList.map(item => {
            if(item.id === userId){
                setUser(item.name)
                setCompanyName(item.company.name);
            }
        })

    })

    return (
        <Wrapper>
            <Title>{props.post.name}</Title>
            <Content>{props.post.body}</Content>
            <Footer>
                <p><img src={contract} />{companyName}</p>
                <Dot>{'\u2B24'}</Dot>
                <p><img src={contract} />Client contract</p>
                <Dot>{'\u2B24'}</Dot>
                <p>Updated 3 days ago by {user}</p>
            </Footer>


        </Wrapper>
    )
}
