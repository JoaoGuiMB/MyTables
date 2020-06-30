import React, { useState, useEffect } from 'react';
import Header from '../components/Header/Header';
import Table from '../components/Table/Table';

export default function ToDoPage() {
  const [toDos, setToDos] = useState([]);
  useEffect( () => {
    const res = async () => {  await fetch('https://jsonplaceholder.typicode.com/todos')
    .then( async response => {   
      setToDos(await response.json())
      return response.json();      
    }).catch(err => {
      console.error(err)
    }) 
  } 
  res();
  
  }, [])



  return(<>
    <Header />
    <Table type="To Dos" data={toDos}
    columns={  [{
      title: 'User Id',
      field: "userId"
    },
    {
      title: 'Title',
      field: 'title',      
     },{
       title: 'Id',
       field: 'id'
     },
    {
      title:'Completed',
      field: 'completed',
      type: 'boolean'
    }
     ]}/>
  </>)
}