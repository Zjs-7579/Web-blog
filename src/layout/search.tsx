import React,{useState} from 'react'

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';

import TextField from '@mui/material/TextField';

import SearchList from './searchList';
const Transition = React.forwardRef(function Transition(
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

export default function Search(props:any) {
    const {open,setSearchDialog} = props

  
    const handleClose = () => {
      //setOpen(false);
      setSearchDialog(false)
    };
  

  return (
    <div>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"

        fullWidth
        maxWidth="md"
        
      >
        <DialogTitle>
        <TextField fullWidth id="outlined-basic" label="Search" variant="outlined" />
        </DialogTitle>
        <DialogContent>
          <SearchList/>
        </DialogContent>
        
      </Dialog>
    </div>
  )
}
