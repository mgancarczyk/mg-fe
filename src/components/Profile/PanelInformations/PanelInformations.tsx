import React, { FC, useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { IState } from '../../../reducers';
import { IPhotoReducers } from '../../../reducers/photosReducers';
import { IUsersReducers } from '../../../reducers/usersReducers';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizers';
import { Correspondant } from './Correspondant';

import fileimg from '../../media/icons/file.svg';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`;
const Title = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    margin: 1vh 2vw;
    font-weight: bold;
    letter-spacing: 1px;
`;
const Informations = styled.div`
    display: flex;
    flex-direction: column;
`;
const SingleField = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1.5vh 2vw;
`;
const InformationsTitle = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.subtleTextGray};
    margin-bottom: 1.5vh;
    font-weight: bold;
    letter-spacing: 1px;
    
`;
const StyledTextInput = styled.input`
    width: 23vw;
    font-size:${fontSize[18]};
    border: none;
    //color: ${Colors.textDarkBlue};
`;

const FileButton = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${Colors.mainBackgroundColor};
    padding: 1.5vh 1vw;
    //border-radius: 10px;

    cursor: pointer;
    img{
        height: 25px;
        width: 25px;
        margin-right: 1vw;
    }
    p{
        font-size:${fontSize[18]};
        color: ${Colors.textDarkBlue};
    }
`;


export const PanelInformations: FC = () => {

    const [hourlyFee, setHourlyFee] = useState<string>('610€/hour (Negociated)');
    const [termsConditions, setTermsConditions] = useState<string>('Monthly 10k€ retainer - see with Jeanny Smith');
    const [servicesProjects, setServicesProjects] = useState<string>('Corporate M&A and international acquisitions');

    const fileRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File>();


    const first = Math.floor(Math.random() * 10) + 1;
    const second = Math.floor(Math.random() * 10) + 1;

    const { usersList, photosList } = useSelector<IState, IUsersReducers & IPhotoReducers>(globalState => ({
        ...globalState.users,
        ...globalState.photos
    }));



    return (
        <Wrapper>
            <Title>
                Panel infromations
            </Title>
            <Informations>
                <SingleField>
                    <InformationsTitle>
                        Hourly fee
                    </InformationsTitle>
                    <StyledTextInput
                        type='text'
                        value={hourlyFee}
                        onChange={e => setHourlyFee(e.target.value)}
                    />
                </SingleField>
                <SingleField>
                    <InformationsTitle>
                        Terms & conditions
                    </InformationsTitle>
                    <StyledTextInput
                        type='text'
                        value={termsConditions}
                        onChange={e => setTermsConditions(e.target.value)}
                    />
                </SingleField>
                
                    <input type='file' 
                        ref={fileRef} 
                        style={{display: 'none'}} 
                        onChange={e => {
                            if( e.target.files && e.target.files.length>0){
                                setFile(e.target.files[0])
                            }
                        }}
                    />
                
                <SingleField>
                    <FileButton onClick ={() => { fileRef.current!.click()}}>
                        <img src={fileimg} />
                        {
                            file?.name === undefined ?
                            <p>Choose file...</p>
                            :
                            <p>{file?.name}</p>
                        }
                        
                        
                    </FileButton>
                    
                </SingleField>
                
            </Informations>
            <Informations>
                    <Title>
                        Services & projects
                    </Title>
                <SingleField>
                    
                    <StyledTextInput
                        type='text'
                        value={servicesProjects}
                        onChange={e => setServicesProjects(e.target.value)}
                    />
                </SingleField>
            </Informations>
            <Informations>
                <Title>
                    Internal correspondants
                </Title>
                <Correspondant
                    img={photosList.filter(item => item.id === first)[0].thumbnailUrl}
                    user={usersList.filter(item => item.id === first)[0]}
                />
                <Correspondant
                    img={photosList.filter(item => item.id === second)[0].thumbnailUrl}
                    user={usersList.filter(item => item.id === second)[0]}
                />


            </Informations>

        </Wrapper>
    )
}
