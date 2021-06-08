import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizers';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid lightgray;
`;
const Table = styled.table`
    margin: 0 0.5%;
`;
const TableHead = styled.thead`
    tr{
        border-bottom: 1px solid lightgray;
    }
    td{
        padding: 0 0 1.5vh 2vw;

        font-size:${fontSize[18]};
        color: ${Colors.textDarkBlue};
        font-weight: bold;
        letter-spacing: 1px;
        text-align: left;
        width: 16%;
    }
`;
const TableBody = styled.tbody`
    td{
        padding: 1vh 0 1vh 2vw;
        color: ${Colors.textDarkBlue};
        width: 16%;
    }

`;

const Title = styled.h1`
    font-size:${fontSize[18]};
    color: ${Colors.textDarkBlue};
    margin: 3vh 2vw;
    font-weight: bold;
    letter-spacing: 1px;
`;
const Bottom = styled.div`
    display: flex;
    font-size:${fontSize[18]};
    color: ${Colors.linkBlue};
    margin: 3vh 2vw;
    font-weight: bold;
    letter-spacing: 1px;
    cursor: pointer;
    margin-left: auto;
    
`;
const StyledTextInput = styled.input`
    font-size:${fontSize[18]};
    border: none;
    color: ${Colors.textDarkBlue};
`;

export const ProfileTable2: FC = () => {
    const [table1, setTable1] = useState<string>('Operation');
    const [table2, setTable2] = useState<string>('Renault');
    const [table3, setTable3] = useState<string>('France');
    const [table4, setTable4] = useState<string>('#Tax');
    const [table5, setTable5] = useState<string>('20/01/2018');
    const [table6, setTable6] = useState<string>('Op. Prometh');
    const [table7, setTable7] = useState<string>('Renulat HQ');
    const [table8, setTable8] = useState<string>('USA');
    const [table9, setTable9] = useState<string>('#M&A');
    const [table10, setTable10] = useState<string>('18/02/2019');
    const [table11, setTable11] = useState<string>('Op. Latandre');
    const [table12, setTable12] = useState<string>('Renulat Br');
    const [table13, setTable13] = useState<string>('Italia');
    const [table14, setTable14] = useState<string>('#Social');
    const [table15, setTable15] = useState<string>('18/02/2019');

    return (
        <Wrapper>
            <Title>
                Propsals
            </Title>
            <Table>
                <TableHead>
                    <tr>
                        <td>Name</td>
                        <td>Entity</td>
                        <td>Location</td>
                        <td>Expertise</td>
                        <td>Date</td>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <td>
                            <StyledTextInput type='text' value={table1} onChange={e => setTable1(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table2} onChange={e => setTable2(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table3} onChange={e => setTable3(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table4} onChange={e => setTable4(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table5} onChange={e => setTable5(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StyledTextInput type='text' value={table6} onChange={e => setTable6(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table7} onChange={e => setTable7(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table8} onChange={e => setTable8(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table9} onChange={e => setTable9(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table10} onChange={e => setTable10(e.target.value)} />
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <StyledTextInput type='text' value={table11} onChange={e => setTable11(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table12} onChange={e => setTable12(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table13} onChange={e => setTable13(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table14} onChange={e => setTable14(e.target.value)} />
                        </td>
                        <td>
                            <StyledTextInput type='text' value={table15} onChange={e => setTable15(e.target.value)} />
                        </td>
                    </tr>
                </TableBody>
            </Table>
            <Bottom>
                See more Reviews
            </Bottom>

        </Wrapper>
    )
}
