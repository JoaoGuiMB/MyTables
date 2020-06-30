import React, { useState ,useEffect } from 'react';
import Header from '../components/Header/Header'
import Table from '../components/Table/Table';
export default function AlbunsPage() {
 const [albums, setAlbums] = useState([]);
  useEffect( () => {
    const res = async () => {  await fetch('https://jsonplaceholder.typicode.com/albums')
    .then( async response => {   
      setAlbums(await response.json())
      return response.json();      
    }).catch(err => {
      console.error(err)
    }) 
  } 
  res();
  
  }, [])
  console.log(albums)
  return(<>
    <Header />
    <Table type={"album"}
    data={albums}
    type="Albums"
    columns={[{
      title: 'User Id',
      field: "userId"
    },
    {
      title: 'Title',
      field: 'title',      
     },{
       title: 'Id',
       field: 'id'
     }

]}
    />
  </>)
}