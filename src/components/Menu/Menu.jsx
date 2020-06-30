import React from 'react';
import { MenuStyle } from '../../styles/MenuStyle'
import { BsFilePost } from 'react-icons/bs'
import { FcTodoList } from 'react-icons/fc' 
import { MdPhotoAlbum } from 'react-icons/md'
export default function Menu() {
  



  return(
    <MenuStyle>
      <li>
        <a href="/posts">         
            <BsFilePost  className={'icons'}/>          
          Posts     
        </a>
      </li>
      <li>
      <a href="/albuns">         
            <MdPhotoAlbum  color={'#5F3473'} className={'icons'}/>          
          Albuns     
        </a>
      </li>
      <li>
      <a href="/todos">         
            <FcTodoList  className={'icons'} />          
          To Dos     
        </a>
      </li>
    </MenuStyle>
  )
}