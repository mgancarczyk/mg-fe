import React, { FC } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPostsReducers } from '../../../reducers/postsReducers';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizers';
import { PublicationLink } from './PublicationLink';


const Wrapper = styled.div`
    display: flex;
    width: 100%;
    min-width: 80vw;
    max-width: 80vw;
    height: 50vh;
    min-height: 50vh;
    margin: 5vh 0vw;
    background-color: #fff;
    border-radius: 0 5px 5px 0;
    box-shadow: 0px 2px 10px 2px rgba(0,0,0,0.2);
`;
const RightSideWrapper = styled.div`
    display: flex;
    height: 50vh;
    min-height: 50vh;
    flex-direction: column;
    justify-content: space-around;
    min-width: 50%;
    width: auto;
    margin: 0 0.5vw;

    h1{
        margin: 1vh 2vw 0 2vw;
        font-size: ${fontSize[22]};
    }
    .publicationLink{
        margin: 0 1vw 1vh 1vw;
        font-size: ${fontSize[20]};
        color: ${Colors.linkBlue}
    }
    
`;
const DisplayLink = styled(PublicationLink)`
    display: flex;
    flex-direction: column;
    width: 35%;
    max-width: 35%;
    div{
        &:last-child{
            display: flex;
            flex-direction: column;
            margin-top: auto;
            color: whitesmoke;
            background: linear-gradient(0deg, rgba(2,0,36,0.8519782913165266) 0%, rgba(9,9,121,0) 100%);
            h1{
                margin: 2vh 2vw 0 2vw;
            }
            span{
                display:flex;
                flex-direction: row;
                align-items: center;

                margin: 1vh 2vw 2vh 2vw;

                p{
                    margin: 0 0.5vw;
                }
            }
        }
    }
    
`;

export const LatestPublications: FC = () => {

    const { postsList } = useSelector<IState, IPostsReducers>(globalState => globalState.posts);

    return (
        <Wrapper>
            
            <DisplayLink displayPublication={true} item={postsList[0]} />
            <RightSideWrapper>
                <h1>Latest Publications</h1>
                <PublicationLink displayPublication={false} item={postsList[0]} />
                <PublicationLink displayPublication={false} item={postsList[1]} />
                <PublicationLink displayPublication={false} item={postsList[36]} />
                <p className='publicationLink'>See more publications</p>
            </RightSideWrapper>
        </Wrapper>
    )
}
