import React, { useState, useEffect } from 'react'
import Header from '../components/Header/Header'
import Table from '../components/Table/Table'
export default function PostPage() {
  const [posts, setPosts] = useState([]);
  useEffect( () => {
    const res = async () => {  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then( async response => {   
      setPosts(await response.json())
      return response.json();      
    }).catch(err => {
      console.error(err)
    }) 
  } 
  res();
  
  }, [])
  


  return(<>
    <Header />
    <Table  data ={posts} type="Posts"columns={
      [{
        title: 'User Id',
        field: "userId"
      },
      {
        title: 'Title',
        field: 'title',      
       },{
         title: 'Id',
         field: 'id'
       }]
       
    }/>
  </>)
}