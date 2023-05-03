import React from 'react';
import {MoneyType} from './App';
import styled from 'styled-components';

type CurrentBankomatPropsType = {
  money: MoneyType
}
export const CurrentBankomat = (props: CurrentBankomatPropsType) => {

  return (
    <Banknote color={props.money.banknotes === 'Dollars' ? 'greenyellow' :
      'lawngreen'}>
      <Name>{props.money.banknotes}</Name>
      <Nominal>  {props.money.value}
      </Nominal>


    </Banknote>
  )

};

const Banknote = styled.div`{
  background-color: ${props => {
    if (props.color === 'greenyellow') {
      return 'greenyellow'
    } else {
      return 'lawngreen'
    }
  }};
  width: 400px;
  height: 400px;
  margin: 100px;
}`


const BanknoteBlue = styled.div`
  background-color: blue;
  width: 400px;
  height: 400px;
  margin: 100px;
`
const Name = styled.span`{
  display: flex;
  justify-content: center;
}`
const Nominal = styled.span`{
  display: flex;
  justify-content: center;
}`