import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useContext } from 'react'
import { styled } from '@mui/material';
import { useState , useRef } from 'react';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import { DataContext } from '../../context/DataProvider';
import {v4 as uuid} from 'uuid';

const Container = styled(Box)`
    display: flex;
    flex-direction: column;
    width: 600px;
    box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 2px 6px 2px rgb(60 64 67 / 15%);
    padding: 10px 15px;
    border-radius: 8px;
    border-color: "#e0e0e0";
    margin: auto;
    min-height:30px;


`

const note = {
    id:'',
    heading:'',
    text:''
}

const Form = () => {

    const containerRef = useRef();


    const [showTextField , setShowTextField] = useState(false);

    const [addNote , setAddNote] = useState({...note, id:uuid()});

    const{setNotes} = useContext(DataContext);


    const onTextAreaClick = () =>{
        setShowTextField(true);
        containerRef.current.style.minHeight = "70px";
    }

    const handleClickAway = () =>{
        setShowTextField(false);
        containerRef.current.style.minHeight = "30px";
        setAddNote({...note, id:uuid()})

        if(addNote.heading || addNote.text){

            setNotes(prevArr => [addNote,...prevArr]);
        }

    }

    const onTextChange = (e) =>{
     console.log(e.target.name , e.target.value)
    let changedNote= {...addNote ,[e.target.name]:e.target.value}
    setAddNote(changedNote);
    }


  return (
    <ClickAwayListener onClickAway={handleClickAway}>

    <Container ref = {containerRef} >
        {
            showTextField &&
            
            <TextField  placeholder='Title'
            variant ="standard"
            InputProps={{disableUnderline:true}}
            style = {{marginBottom:10}} 

            onChange={(e) => onTextChange(e)}
            name='heading'
            value= {addNote.heading}
            />
}
        <TextField placeholder='Take a note...'
        variant ="standard"
        multiline
        maxRows={Infinity}
        InputProps={{disableUnderline:true}}
        onClick={onTextAreaClick}

        onChange={(e) => onTextChange(e)}
        name='text'
        value={addNote.text}
        
        />
    </Container>
        </ClickAwayListener>
  )
}

export default Form;
