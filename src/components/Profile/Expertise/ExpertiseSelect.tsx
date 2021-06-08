import React, { FC, useState } from 'react'
import styled from 'styled-components';
import { fontSize } from '../../../styledHelpers/FontSizers';
import { SelectData } from './ExpertiseForm';

const StyledSelect = styled.select`
    height: 3vh;
    width: auto;
    background-color: #ddf3f3;
    color: #539194;
    font-size:${fontSize[18]};
    padding: 0 0.5vw 0 0.5vw;
    appearance: none;
    margin-right: 0.5vw;

    &:focus{
        outline: none;
    }

    option{
        border-radius: 0 0 5px 5px;
    }

`;

interface IExpertiseSelect {
    className?:string
    optionList: SelectData[];
    value: SelectData;
    setValue: any;
}

export const ExpertiseSelect: FC<IExpertiseSelect>= (props) => {

    const [label, setLabel] = useState<string>('');
        
    return (
        <StyledSelect value={props.value.value} onChange={e => props.setValue({label: e.target[e.target.selectedIndex].textContent, value: e.target.value })} className={props.className}>
            {
                props.optionList.map(item => {
                    return <option value={item.value} onClick={() => {setLabel(item.label)}} >{item.label}</option>
                })
            }

        </StyledSelect>
    )
}
