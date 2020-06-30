import React, { useState } from 'react';
import MaterialTable from 'material-table';
import tableIcons from '../TableIcons/TableIcons';
import Visibility from '@material-ui/icons/Visibility';
import SimpleModal from '../Modal/SimpleModal';


export default function TableComponent(props) {
  const [isOpen, setOpen] = useState(false);
  const [body, setBody] = useState({});

  function openModal(data){  
    setOpen(!isOpen); 
    console.log(data);
    setBody(data.body); 
    
  }
  function closeModal(){
    console.log('asdsad')
    setOpen(false);
  }
  console.log(props)
  return( <>
  {isOpen && <SimpleModal open={isOpen} data={body} onClose={closeModal} />}
  <MaterialTable title={props.type} 
    columns={props.columns}
    data={props.data}
    icons={tableIcons}    
    actions={[  
      {  
        icon: props.type === "Posts" ? Visibility : '',
        tooltip: 'Visualizar detalhes',
        onClick: (event, rowData) =>{
          event.preventDefault();
          openModal(rowData)
        }
      }
    ]}
  />
 </>
  )  
}

