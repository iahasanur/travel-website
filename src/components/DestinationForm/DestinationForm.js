import React from 'react';
import { useForm } from 'react-hook-form';
import "./DestinationForm.css";
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import { useHistory } from 'react-router-dom';
import Rooms from '../Rooms/Rooms';

const DestinationForm = (props) => {
    const { register, handleSubmit } = useForm();
     const onSubmit = data => data;

    
        // The first commit of Material-UI
        const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));
      
        const handleDateChange = (date) => {
          setSelectedDate(date);
        };
       
       const history = useHistory();
        const handleBooking=()=>{
           history.push("/rooms",{params:[props.place]});
          
        }
        
     
    return (
    
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className = "Form">
        <label> Origin
         <br></br>
        <input name="Origin" ref={register} required/>
        </label>
        <br></br>
        <label> Destination
         <br></br>
        <input name="Destination" ref={register} required/>
        </label>
        <br></br>
        
        <label> Visiting Date
         <br></br>
         
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around" >
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="From"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
              <KeyboardDatePicker
                margin="normal"
                id="date-picker-dialog"
                label="To"
                format="MM/dd/yyyy"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
             
            </Grid>
          </MuiPickersUtilsProvider>

        </label>
        <br></br>
        <input onClick = {()=>{handleBooking()}}type="submit" value="Booking" />
        </div>
      </form>
    );
};

export default DestinationForm;