import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import {dark_color,grey_dark,light_color,blue} from '../Styles'

const useStyles = makeStyles((theme) => {
  
  return {
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper:props=> ({
    backgroundColor: props.theme === 'dark' ? `${dark_color}` : `${light_color}`,
    outline: "none",
    height:"170px",
    width:"420px",
    position:"relative",
    borderRadius:"5px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
    color: props.theme === 'dark' ? `${light_color}` : "black",
  }),
  location:{
    position:"absolute",
    top:'10px',
    left:'5px'
  },
  input_location:props => ({
    width:"100%",
    height:"50px",
    outline:'none',
    border:'none',
    paddingLeft:"30px",
    background:'transparent',
    borderBottom:`1px solid ${props.theme === 'dark' ? `${light_color}` : `${dark_color}`}`
  }),
  checkbox_search_container:{
    flex:1,
    padding:"15px 10px",
    display:'flex',
    flexDirection:'column',
    justifyContent:'space-between',
  },
  submit_btn:{
    height:"40px",
    margin:"0 15px",
    borderRadius:"5px",
    outline:'none',
    border:'none',
    backgroundColor:`${blue}`,
    color:`${light_color}`,
    '&:hover':{
      backgroundColor:`transparent`,
      border:`1px solid ${blue}`,
      color:`${blue}`
    }
  },
}});

export default function SearchModal(props) {
  
  
  const styleProps = {theme:props.theme}
  const classes = useStyles(styleProps);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={(e)=>{
        e.preventDefault();
        handleOpen()}}>
        <img src="/images/mobile/icon-filter.svg" alt=""/>
      </button>
      <Modal

        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <div className={classes.location_container}>
                    <span className={classes.location}>
                        <img src="/images/desktop/icon-location.svg" alt=""/>
                    </span>
                    <input className={classes.input_location} type="text" placeholder="Filter by location..."/>
            </div>
            <div className= {classes.checkbox_search_container}>
                        <div className={classes.checkbox}>
                            <label htmlFor="">
                                <input type="checkbox"/>
                                <span style={{marginLeft:"10px"}}>Full Time</span>
                            </label>
                        </div>
              <button className={classes.submit_btn} type="submit">Search</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
