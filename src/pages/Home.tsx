import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
//Import UI Compoenents & Icons
import {Grid, Paper, Fab, makeStyles} from '@material-ui/core'
import {Add} from '@material-ui/icons'

//import Components
import Header from '../components/Header'
import TableCard from '../container/TableCard'
import OverviewCard from '../container/OverviewCard'
import RegisterFormCard from '../container/RegisterFormCard'
import CreateExpenseCard from '../container/CreateExpenseCard'

//Redux Root State & Fucntions
import { RootState } from '../state/store'
import {getExpenseList} from '../state/expensesDucks'
import { getUser } from '../state/userDucks'

//Import Types 
import {IExpense} from '../typing/expenseType'

//Component Stylings
const useStyles = makeStyles(theme => ({
  paper: {
    backgroundColor: '#f6f9fc',
    height: '100vh'
  },
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(4)
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

const Home: React.FC = () => {
  //Initialize Dispatcher and UI Styling
  const classes = useStyles();
  const dispatch = useDispatch()
  
  //State for component
  const[isLoading, setIsLoading] = useState(true);
  const [showRegisterForm, setShowRegisterForm] = useState(true)
  const [showCreateForm, setShowCreateForm] = useState(false)

  //UseEffect for getting user data and storing as a constant
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  const user = useSelector((state: RootState) => state.user)

  //UseEffect for registering form and importing fake data for the first time
  useEffect(() => {
    if (user.isRegistered === false) {
      setShowRegisterForm(true)
    }
    else{
      dispatch(getExpenseList());
      setShowRegisterForm(false)
      setIsLoading(false)
    }    
  }, [showRegisterForm, dispatch, user])

  const expenseData = useSelector((state: RootState) => 
    state.expense.expenseList.sort((a: IExpense, b: IExpense) => {
      if (a.date > b.date) return -1
      else if (a.date < b.date) return 1
      else return 0
    })
  )
    
  //Handle Closing of Register Form
  const handleCloseRegisterForm = () => {
    setShowRegisterForm(false)
  }

  //Handle Opening & Closing of Create Expense Form
  const handleOpenCreateForm = () => {
    setShowCreateForm(true)
  }
  const handleCloseCreateForm = () => {
    setShowCreateForm(false)
  }

  return (
      <Paper elevation={0} className={classes.paper}>
        <main>
          {!isLoading && 
          <>
          <Grid container spacing={3}>
            <Grid item md={12} >
              <Header username={user.username}/>
            </Grid>
            <Grid item md={6} xs={12}>
              <OverviewCard data={expenseData}/> 
            </Grid>
            <Grid item md={6} xs={12} >
              <TableCard data={expenseData}/>
            </Grid>
          </Grid>
          <Fab color='primary' variant="extended" className={classes.fab} onClick={handleOpenCreateForm}>
            <Add className={classes.extendedIcon}/>
            Expense
          </Fab>
          </>
          }
          {showRegisterForm && <RegisterFormCard handleOnClose={handleCloseRegisterForm}/>}
          {showCreateForm && <CreateExpenseCard handleOnClose={handleCloseCreateForm}/>}
        </main>
      </Paper>
  )
}

export default Home
