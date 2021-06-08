import React, { FC } from 'react';

/*
const Wrapper = styled.div'
background: black;
';
*/

export const SinglePublication: FC = () => {
    return(
        <div>
            <div className="left">
                <img src="#" />
            </div>
            <div className="right">
                <p>Lorem ipsum...</p>
                <div>
                    <span>7 stycznia</span>
                    <div className="person">
                        <img src="#" />
                        <span>Imie Nazwisko</span>
                    </div>
                </div>
            </div>
        </div>
    )
}