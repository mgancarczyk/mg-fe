import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components';
import { Colors } from '../../../styledHelpers/Colors';
import { fontSize } from '../../../styledHelpers/FontSizers';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
const Table = styled.table`
    margin: 0 0.5%;
`;
const TableHead = styled.thead`
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

export const AmountFees: FC = () => {

    return (
        <Wrapper>
            <Title>
                Amount of fees
            </Title>
            <Table>
                <TableHead>
                    <tr>
                        <td>Year</td>
                        <td>Cost center</td>
                        <td>Total amount</td>
                        <td>Law firm</td>
                    </tr>
                </TableHead>
                <TableBody>
                    <tr>
                        <td>2019</td>
                        <td>CS 153</td>
                        <td>3 500$</td>
                        <td>Clifford chance</td>
                    </tr>
                    <tr>
                        <td>2018</td>
                        <td>CS 153</td>
                        <td>9 500$</td>
                        <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td>2017</td>
                        <td>CS 47</td>
                        <td>10 500$</td>
                        <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>CS 153</td>
                        <td>18 500$</td>
                        <td>Linklaters</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>CS 32</td>
                        <td>15 500$</td>
                        <td>Linklaters</td>
                    </tr>
                </TableBody>
            </Table>
        </Wrapper>
    )
}
