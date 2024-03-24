import { useState, useEffect } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';


function App() {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [questions, setQuestions] = useState([])

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
    let data = fetch('http://127.0.0.1:8000/question_data').then((response) => response.json()).then((data) => data.data)
    setQuestions(data[0])

  }, [])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(questions);


//   <Button onClick={handleOpen}>Open modal</Button>
// <Modal
//   open={open}
//   onClose={handleClose}
//   aria-labelledby="modal-modal-title"
//   aria-describedby="modal-modal-description"
// >
  // <Box sx={style}>
  //   <Typography id="modal-modal-title" variant="h6" component="h2">
  //     Text in a modal
  //   </Typography>
  //   <Typography id="modal-modal-description" sx={{ mt: 2 }}>
  //     Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  //   </Typography>
  // </Box>
// </Modal>
  return (
    <>
      {/* hello world  */}
      <div>
      <Button style={{display: 'flex', justifyContent: 'center'}}onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2" color='black'>
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }} color='black'>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
    {/* {questions} */}
  </Box>
        
        
        
      </Modal>
    </div>
      
      
    </>
  )
}

export default App
