import React from 'react';
import { HeaderStyle } from '../../styles/HeaderStyle';
import logo from '../../assets/logo.png'
export default function Header() {

  return(
  <HeaderStyle>
    
    <a href="/">
      <img src={logo} alt="Logo" />
    </a>
  </HeaderStyle>
  )
}