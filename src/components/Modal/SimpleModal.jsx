import React,{ useState  } from 'react';
import Modal from 'react-modal';


const ModalStyle = {
  overlay: {
    position: "fixed",
    zIndex: "999 !important",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    aliginItemns: 'center',
    position: 'absolute',
    top: '110px',
    left: '40px',
    right: '40px',
    bottom: '40px',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '4px',
    outline: 'none',
    padding: '20px',
    width: '60%',
    margin: 'auto',
    height: '55%'
  },
  button: {
    backgroundColor: '#5f3473',
    color: 'white',
    height: '50px',
    border: 0,
    borderRadius: '8px',
    width: '60px',    
    margin: '0 auto',
    marginTop: '35px',
    cursor: 'pointer',
  }
 
};



export default function SimpleModal(props) {
  const [open] = useState(props.open)

  return(<Modal
    isOpen={open}
    onRequestClose={props.onClose}
    style={ModalStyle}    
    >
    <p>{props.data}</p>
    <button onClick={() => props.onClose(false) } style={ModalStyle.button}>
      Fechar
    </button>

  </Modal>)
}