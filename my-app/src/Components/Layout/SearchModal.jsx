import React from 'react';
import { useStyles } from '../Styles/searchModal';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';




export default function SearchModal(props) {
  
  
  const styleProps = {theme:props.theme}
  const classes = useStyles(styleProps);
  const [open, setOpen] = React.useState(false);
  const {location,full_time,handelChange,description,handelSearch} = props
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getResults = ()=>{
    setOpen(false)
    handelSearch({description,location,full_time})
  }

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
                    <input name='location' value={location} onChange={(e)=>handelChange(e)} className={classes.input_location} type="text" placeholder="Filter by location..."/>
            </div>
            <div className= {classes.checkbox_search_container}>
                        <div className={classes.checkbox}>
                            <label htmlFor="">
                                <input type="checkbox" name='full_time'  onChange={(e)=>handelChange(e)} checked={full_time}/>
                                <span style={{marginLeft:"10px"}}>Full Time</span>
                            </label>
                        </div>
              <button  onClick={getResults} className={classes.submit_btn} type="submit">Search</button>
            </div>
          </div>
        </Fade>
      </Modal>
    </>
  );
}
