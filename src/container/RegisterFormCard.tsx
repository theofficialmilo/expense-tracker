import React, {useState} from 'react'
//Import Ui-Components
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button, TextField} from '@material-ui/core'

//Import Redux dispatcher & Action Creators
import {useDispatch} from 'react-redux'
import {setUser} from '../state/userDucks';
import {setExpenseList} from '../state/expensesDucks'

//Import fake data generation
import {fakeExpenses} from '../utils/fakeData'

//Define prop type
interface IProps {
  handleOnClose: Function
}

const RegisterFormCard: React.FC<IProps> = ({handleOnClose}: IProps) => {
  const [open, setOpen] = useState(true);
  const dispatch = useDispatch();

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      name: { value: string };
    };

    const form = {
      isRegistered: true,
      username: target.name.value
    } 

    dispatch(setUser(form))
    dispatch(setExpenseList(fakeExpenses()))
    setOpen(false);
    handleOnClose();
  };

  return (
    <Dialog open={open} aria-labelledby="form-dialog-title">
      <form onSubmit={handleSubmit}>
      <DialogTitle id="form-dialog-title">Register</DialogTitle>
      <DialogContent>
          <DialogContentText>
            Please enter your name in the form below before continuing.
          </DialogContentText>
            <TextField
              autoFocus
              id="name"
              name="name"
              label="Name"
              type="text"
              fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button type="submit" color="primary" variant='contained'>
            Register!
          </Button>
        </DialogActions>
        </form>
    </Dialog>
  )
}
export default RegisterFormCard
