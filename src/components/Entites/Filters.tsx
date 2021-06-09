import React, {FC, useState} from 'react';
import styled from 'styled-components';

import x from '../media/icons/x.svg';
import arrowDown from '../media/icons/arrow-down.svg';
import plus from '../media/icons/plus.svg';

const Wrapper = styled.div`
    //float: left;
    //display: fixed;
    //margin: auto;
    //position: relative;
    //width: 100vw;
    //background-color: green;
    margin-top: 5vh;
    height: 12vh;
    width: 25vw;
    box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
    border-radius: 5px;
    padding-top: 0.4vh;
    padding-bottom: 1vh;
`;

const Ruler = styled.div`
    margin-top: 1vh;
    //text-align: center;
    display: fixed;
    img{
        margin-left: 0.4vw;
        margin-right: 0.4vw;
    }
    p{
        margin-left: 0.4vw;
        margin-right: 0.4vw;
        font-weight: bold;
    }
    span{
        box-shadow: 0px 1px 3px 1px rgba(0,0,0,0.2);
        background-color: #d3c0c0;
        border-radius: 5px;
        padding-left: 0.4vw;
        padding-right: 2vw;
        padding-top: 0.4vh;
        padding-bottom: 0.4vh;
        color: #8080809d
    }
`;

export const Filters: FC = () => {

    return(
        <Wrapper>
            <Ruler>
                <p>Rows are filtered by the following conditions starting from the top.</p>
            </Ruler>
            <Ruler>
                <img src={plus} />
                <p>Where</p>
                <p>Company</p>
                <img src={arrowDown} />
                <p>Contains</p>
                <img src={arrowDown} />
                <span>Type...</span>
            </Ruler>
            <Ruler>
                <img src={plus} />
                <p>Where</p>
                <p>Status</p>
                <img src={arrowDown} />
                <p>Is</p>
                <img src={arrowDown} />
                <span>Type...</span>
                <p>In</p>
                <img src={arrowDown} />
                <span>Type...</span>
            </Ruler>
            <Ruler>
                <img src={plus} />
                <p>And</p>
                <p>Status</p>
                <img src={arrowDown} />
                <p>Ends before</p>
                <img src={arrowDown} />
                <span>Type...</span>
                <p>In</p>
                <img src={arrowDown} />
                <span>Type...</span>
            </Ruler>
            <Ruler>
                <img src={plus} />
                <p>Add filter</p>
                <p>choose property</p>
                <img src={arrowDown} />
            </Ruler>
        </Wrapper>
    );
};