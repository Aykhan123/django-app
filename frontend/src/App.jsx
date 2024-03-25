import { useState, useEffect } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { FormGroup } from '@mui/material';


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

  const [questions, setQuestions] = useState()
  const [questionText, questionSubmitted] = useState('')

  useEffect(() => {
    console.log(import.meta.env.VITE_API_URL)
    fetch('http://127.0.0.1:8000/question_data').then((response) => response.json()).then((data) => setQuestions(data.data))
  
  }, [])

  useEffect(()=>{}, [questions])
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  console.log(questions);


  const handleQuestionSubmission = (e) => {
    e.preventDefault()
    console.log(questionText)
  }

  const callBack = async () => {
    const data = {
      question_text: questionText
    }
    console.log(data)
    const result = await fetch('http://127.0.0.1:8000/create_question', {
      method: 'POST',
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify(data)
    })
    const response = await result.json()
    console.log(response)
  
  }



  return (
    <>
      <h2>Form</h2>
      <form onSubmit={handleQuestionSubmission} ></form>
      <FormGroup>
        <input 
        type="text" 
        placeholder='enter ur question'
        onChange={(e) => questionSubmitted(e.target.value)}
        />
        
        <button onClick={callBack}>Submit</button>
      </FormGroup>
      {/* questions.map((x) <p>x</p>) */}
      <p style={{"color": 'red',}}>{questions}</p>
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
  </Box>
      </Modal>
    </div>
      
    </>
  )
}

export default App
