import React, { FC, useEffect, useState } from 'react'
import { ISinglePost } from '../../../entities/posts'
import styled from 'styled-components'
import { SingleResume } from './SingleResume';
import { fontSize } from '../../../styledHelpers/FontSizers';
import { useSelector } from 'react-redux';
import { IState } from '../../../reducers';
import { IPostsReducers } from '../../../reducers/postsReducers';
import { ICommentsReducers } from '../../../reducers/commentsReducers';
import { IUsersReducers } from '../../../reducers/usersReducers';
import { ISingleComment } from '../../../entities/comments';


interface IFilteredResumes {
    itemList: ISingleComment[];
    filter: string;
}

const PaginationWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    padding: 2vh 0;

    div{
        display: flex;
    flex-direction: row;
    }
    p{
        font-size:${fontSize[22]};
        color: #4b4bff;
        margin: 0 0.5vw;
        cursor: pointer;
    }
`;



export const FilteredResumes: FC<IFilteredResumes> = (props) => {

    const { postsList, commentsList, usersList } = useSelector<IState, IPostsReducers & ICommentsReducers & IUsersReducers>(globalState => ({
        ...globalState.posts,
        ...globalState.comments,
        ...globalState.users
    }));

    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
    const [displayResumes, setDisplayResumes] = useState<ISingleComment[]>(props.itemList);
    const [pageNumbers, setPageNumbers] = useState<number[]>([]);



    useEffect(() => {

        const lastIndex = currentPage * itemsPerPage;
        const firstIndex = lastIndex - itemsPerPage;
        const pages = [];
        // console.log(firstIndex)
        // console.log(lastIndex)
        // console.log(props.itemList.slice(firstIndex, lastIndex))

        for (let i = 1; i <= Math.ceil(props.itemList.length / itemsPerPage); i++) {
            pages.push(i);

        }
        setPageNumbers(pages);


        setDisplayResumes(props.itemList.slice(firstIndex, lastIndex));
    }, [props.itemList, currentPage])

    useEffect(() => {
        setCurrentPage(1);
    }, [props.itemList])


    useEffect(() => {


    }, [currentPage])

    const handleChange = (page: number) => {
        setCurrentPage(page);
    }

    const middlePages = () => {
        if (pageNumbers.length < 5) {
            return pageNumbers.map(item => {
                if (item > pageNumbers[0] && item < pageNumbers.length) {
                    return <p onClick={() => { handleChange(item) }}>{item}</p>
                }
            })
        } else {
            if (currentPage === 1) {
                return (
                    <div>
                        <p>...</p>
                        <p onClick={() => { handleChange(currentPage + 1) }}>{currentPage + 1}</p>
                        <p onClick={() => { handleChange(currentPage + 2) }}>{currentPage + 2}</p>
                        <p onClick={() => { handleChange(currentPage + 3) }}>{currentPage + 3}</p>
                        <p>...</p>
                    </div>
                )
            } else if (currentPage === pageNumbers.length) {
                return (
                    <div>
                        <p>...</p>
                        <p onClick={() => { handleChange(currentPage - 3) }}>{currentPage - 3}</p>
                        <p onClick={() => { handleChange(currentPage - 2) }}>{currentPage - 2}</p>
                        <p onClick={() => { handleChange(currentPage - 1) }}>{currentPage - 1}</p>
                        <p>...</p>
                    </div>
                )
            } else {
                return (
                    <div>
                        <p>...</p>
                        <p onClick={() => { handleChange(currentPage - 1) }}>{currentPage - 1}</p>
                        <p onClick={() => { handleChange(currentPage) }}>{currentPage}</p>
                        <p onClick={() => { handleChange(currentPage + 1) }}>{currentPage + 1}</p>
                        <p>...</p>
                    </div>
                )
            }
        }

    }



    return (
        <>

            {
                displayResumes.map(item => {
                    return <SingleResume post={item} />
                })

            }

            <PaginationWrapper>
                <p onClick={() => {
                    if(currentPage > 1){
                        setCurrentPage(prevState => --prevState );
                    }
                }}>PREV</p>
                {
                    (pageNumbers.length >= 1) ? <p onClick={() => { handleChange(pageNumbers[0]) }}>{pageNumbers[0]}</p> : null
                }
                {
                    middlePages()
                }
                {
                    (pageNumbers.length > 1) ? <p onClick={() => { handleChange(pageNumbers.length) }}>{pageNumbers.length}</p> : null
                }
                <p onClick={() => {
                    if(currentPage < pageNumbers.length){
                        setCurrentPage(prevState => ++prevState );
                    }
                }}>NEXT</p>
            </PaginationWrapper>



        </>
    )
}
