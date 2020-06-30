import React from 'react'
import { Wrapper } from '../styles/Wrapper';
import Header from '../components/Header/Header';
import Menu from '../components/Menu/Menu'

export default function Home() {
  return(<>
    <Header />
    <Wrapper>
      <Menu />
    </Wrapper>
  </>)
}