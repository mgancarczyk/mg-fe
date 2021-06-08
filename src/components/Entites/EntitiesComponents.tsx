import React, {FC} from 'react';
import styled from 'styled-components';

import { SimpleEntities } from './SimpleEntities';
import entities from '../media/icons/entities.svg';
import house2 from '../media/icons/house2.svg';


const Wrapper = styled.div`
    //background-color: red;
    height: 97vh;
    width: 78.5vw;
    margin-bottom: 3vh;
    margin-top: 4vh;
`;

export const EntitiesComponents: FC = () => {
    return(
        <Wrapper>
            <SimpleEntities label="ABC generic company" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
            <SimpleEntities label="World company SAS" text="Caracas 1050, Distrito Capita Venezue" photo={entities}/>
            <SimpleEntities label="Subsid Corp Ltd" text="Caracas 1050, Distrito Capita Venezue" photo={house2}/>
        </Wrapper>
    );
};