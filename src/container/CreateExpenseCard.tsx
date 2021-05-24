import React, {useState} from 'react'

//Import Ui-Components
import {Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField,MenuItem, InputAdornment, Grid} from '@material-ui/core'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers';

//Import Redux dispatcher & Action Creators
import { useDispatch } from 'react-redux';
import { setExpense } from '../state/expensesDucks';

//Import Date Processing function Libraries
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

//Import Fake Data generation libray
import faker from 'faker'

//Define Prop Types
interface IProps {
  handleOnClose: Function
}

const CreateExpenseCard:React.FC<IProps> = ({handleOnClose}: IProps) => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState({
    name: false,
    amount: false
  });
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(),);
  
  //Handle Form submit Function
  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    
    //Set target variables(For Typescript checking)
    const target = e.target as typeof e.target & {
      name: { value: string };
      type: {value: string};
      date: {value: Date};
      amount: {value: string}
    };

    //Final Validator
    if(target.name.value === '') 
      return setIsError((prevState: any) => ({...prevState, name: true}))
    else if (isNaN(parseFloat(target.amount.value))) 
      return setIsError((prevState: any) => ({...prevState, amount: true}))
    
    //Create New Expense
    const form = {
      id: faker.git.commitSha(),
      name: target.name.value,
      type: target.type.value,
      date: new Date(target.date.value),
      dateMonth: new Date(target.date.value).getMonth(),
      amount: parseFloat(target.amount.value),
    }

    //Dispatches to Reducer and closes dialog componenet
    dispatch(setExpense(form))
    handleOnClose()
  }

  //Handle OnChange Function for both Name and Amount input
  const handleFormOnChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    name === 'name' && value === '' ? 
      setIsError((prevState: any) => ({...prevState, name: true})): 
      setIsError((prevState: any) => ({...prevState, name: false}))

    name === 'amount' && isNaN(parseFloat(value)) ?
      setIsError((prevState: any) => ({...prevState, amount: true})): 
      setIsError((prevState: any) => ({...prevState, amount: false}))
  }

  //Handle OnChange Function for Date input(Needed due to component props)
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date)
  };

   //Handle OnClick Cancel Button
  const handleOnClickCancel = () => {
    handleOnClose()
  }

  return (
    <Dialog open={true} aria-labelledby='form-dialog-title'>
      <form onSubmit={handleSubmit}>
        <DialogTitle id="form-dialog-title">Create Expense</DialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <TextField
                autoFocus
                id="name"
                name="name"
                type="text"
                label="Name"
                fullWidth
                placeholder="Expense name"
                onChange={handleFormOnChange}
                error={isError.name}
                helperText={isError.name && 'Expense must not be null'}
              />
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                select
                id='type'
                name='type' 
                type="text"
                label='Type'
                defaultValue='Food & Drinks'
                fullWidth
              >
                <MenuItem value='Food & Drinks'>Food & Drinks</MenuItem>
                <MenuItem value='Rent'>Rent</MenuItem>
                <MenuItem value='Insurance'>Insurance</MenuItem>
                <MenuItem value='Entertainment'>Entertainment</MenuItem>
                <MenuItem value='Others'>Others</MenuItem>
              </TextField>
            </Grid>
            <Grid item md={6} xs={12}>
              <MuiPickersUtilsProvider utils={DateFnsUtils} >
                <DatePicker
                  fullWidth
                  disableToolbar
                  disableFuture
                  variant="inline"
                  format="dd MMM yyyy"
                  id="date"
                  name="date"
                  label="Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>
            <Grid item md={6} xs={12}>
              <TextField
                id="amount"
                name="amount"
                type="number"
                label="Amount"
                fullWidth
                error={isError.amount}
                onChange={handleFormOnChange}
                helperText={isError.amount && 'Input number ranging from 0-9'}
                InputProps={{
                  startAdornment: <InputAdornment position="start">$</InputAdornment>,
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button type='button' color='secondary' onClick={handleOnClickCancel}>Cancel</Button>
          <Button type='submit' color='primary' variant='contained'>Create Expense</Button>
        </DialogActions>
      </form>
    </Dialog>
  )
}
export default CreateExpenseCard
