import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { ExpertiseSelect } from './ExpertiseSelect';

import edit from '../../media/icons/edit.svg';
import { fontSize } from '../../../styledHelpers/FontSizers';
import { Colors } from '../../../styledHelpers/Colors';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`;

const TopBar = styled.div`
    display: flex;
    flex-direction: row;
`;
const Title = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.subtleTextGray};
    margin-left: 2vw;
    margin-bottom: 0.2vh;
    font-weight: bold;
    letter-spacing: 1px;
`;
const EditButton = styled.img`
    width: 25px;
    height: 25px;
    margin: 1vh 2.5vw 0 auto;
    cursor: pointer;
`;
const SelectBar = styled.div`
    display: flex;
    flex-direction: row;
    margin: 2vh 2vw;
`;
const Field = styled.div`
    display: flex;
    height: 3vh;
    width: auto;
    background-color: #ddf3f3;
    color: #539194;
    font-size:${fontSize[18]};
    padding: 0 0.5vw 0 0.5vw;
    align-items: center;
    margin-right: 0.5vw;
`;

export interface SelectData {
    label: string;
    value: string;
}


const expertiseList: SelectData[] = [
    { label: 'Client service', value: 'clientservice' },
    { label: 'Corporate training', value: 'corporatetraining' },
    { label: 'Financial analysis', value: 'financialanalysis' },
    { label: 'Management skills', value: 'managementskills' },
    { label: 'Project management', value: 'projectmanagement' },

];
const specialitiesTwoList: SelectData[] = [
    { label: 'Design patterns, modelling tools', value: 'designpaterns' },
    { label: 'Testing frameworks expertise', value: 'testingframeworks' },
    { label: 'Excellent frameworks expertise', value: 'frameworksexpertise' },
    { label: 'BS/BA in Design', value: 'design' },
    { label: 'Mobile and web QA', value: 'mobwebqa' },
];
const admissionList: SelectData[] = [
    { label: 'African bar associations‎', value: 'african' },
    { label: 'American bar associations', value: 'american' },
    { label: 'Israel Bar Association', value: 'isreal' },
    { label: 'Portuguese Bar Association', value: 'protug' },
    { label: 'Swedish Bar Association', value: 'swedish' },
];

export const ExpertiseForm: FC = () => {

    const [isEditable, setIsEditable] = useState<boolean>(true);

    const [loading, setLoading] = useState<boolean>(true);

    const [expertiseValue, setExpertiseValue] = useState<SelectData>(expertiseList[0]);
    const [specialitiesOne, setSpecialitiesOne] = useState<SelectData>(specialitiesTwoList[0]);
    const [specialitiesTwoValue, setSpecialitiesTwoValue] = useState<SelectData>(specialitiesTwoList[1]);
    const [admissionOne, setAdmissionOne] = useState<SelectData>(admissionList[0]);
    const [admissionTwo, setAdmissionTwo] = useState<SelectData>(admissionList[1]);
    const [country, setCountry] = useState<SelectData>({label: 'Poland', value:'Poland'});
    const [countryList, setCountryList] = useState<any>();

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all?fields=name;')
            .then(response => response.json())
            .then(result => {
                console.log(result);
                const countryList = result.map((item: { name: string; }) => {
                    return { label: item.name, value: item.name }
                });
                setCountryList(countryList);
            }).finally(() => {
                setLoading(false);
            })
            .catch(e => console.log('Error:', e))
    }, [])

    return (
        <Wrapper>
            <TopBar>
                <Title>
                    Expertise
                </Title>
                <EditButton src={edit} onClick={()=>{setIsEditable(!isEditable)}} />
            </TopBar>

            {
                isEditable ?
                    <SelectBar>
                        <Field>{expertiseValue.label}</Field>
                    </SelectBar>
                    :
                    <SelectBar>
                        <ExpertiseSelect optionList={expertiseList} value={expertiseValue} setValue={setExpertiseValue} />

                    </SelectBar>
            }

            <TopBar>
                <Title>
                    Specialities
                </Title>

            </TopBar>

            {
                isEditable ?
                    <SelectBar>
                        <Field>{specialitiesOne.label}</Field>
                        <Field>{specialitiesTwoValue.label}</Field>
                    </SelectBar>

                    :
                    <SelectBar>
                        <ExpertiseSelect optionList={specialitiesTwoList} value={specialitiesOne} setValue={setSpecialitiesOne} />
                        <ExpertiseSelect optionList={specialitiesTwoList} value={specialitiesTwoValue} setValue={setSpecialitiesTwoValue} />
                    </SelectBar>
            }

            <TopBar>
                <Title>
                    Admission to practice law
                </Title>

            </TopBar>
            {
                isEditable ?
                    <SelectBar>
                        <Field>{admissionOne.label}</Field>
                        <Field>{admissionTwo.label}</Field>
                    </SelectBar>

                    :
                    <SelectBar>
                        <ExpertiseSelect optionList={admissionList} value={admissionOne} setValue={setAdmissionOne} />
                        <ExpertiseSelect optionList={admissionList} value={admissionTwo} setValue={setAdmissionTwo} />
                    </SelectBar>
            }

            <TopBar>
                <Title>
                    Countries
                </Title>

            </TopBar>
            {
                isEditable ?
                    <SelectBar>
                        <Field>{country.label}</Field>
                    </SelectBar>
                    :

                    <SelectBar>
                        {
                            loading ? <p>Loading</p>
                            :
                            <ExpertiseSelect optionList={countryList} value={country} setValue={setCountry} />
                        }
                        
                    </SelectBar>

            }




        </Wrapper>
    )
}
