import React, {useState} from 'react'
//Import Redux dispatcher & Action Creators
import {useDispatch} from 'react-redux'
import { clearExpense } from '../state/expensesDucks'

// Ui-Componenet Import
import {Paper, TableContainer, Table, TableBody, TableRow, TableCell, makeStyles} from '@material-ui/core'

//Typing for Types Import
import {IExpense} from '../typing/expenseType'

//Components Import
import TableToolbar from '../components/TableToolbar'
import TableHeader from '../components/TableHeader'

//Define Prop type
interface IProps{
  data: Array<IExpense>
}

const useStyles = makeStyles(theme => ({
  tableContainer: {
    height: 300
  }
}))

const TableCard: React.FC<IProps> = ({data}: IProps) => {
  const dispatch = useDispatch();
  const classes = useStyles();
  //State of selected expenses
  const [selected, setSelected] = useState<string[]>([]);

  //Check if row is selected or not. 
  const isSelected = (name: string) => selected.indexOf(name) !== -1;

  //Click Handler
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }
    setSelected(newSelected);
  };

  //Delete Expense handler
  const handleDeleteExpense = () => {
    dispatch(clearExpense(selected));
    setSelected([]);
  }

  return (
    <Paper>
      <TableToolbar numSelected={selected.length} handleClear={handleDeleteExpense}/>
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table stickyHeader>
            <TableHeader />
            <TableBody>
              {data.map((expense: IExpense, index: number) => {
                const isItemSelected = isSelected(expense.id);
                return (
                <TableRow 
                  hover 
                  onClick={(event) => handleClick(event, expense.id)}
                  role="checkbox"
                  aria-checked={isItemSelected}
                  tabIndex={-1}
                  key={expense.id}
                  selected={isItemSelected}
                  >
                  <TableCell component="th" scope="row">{expense.name}</TableCell>
                  <TableCell>{expense.type}</TableCell>
                  <TableCell>{new Date(expense.date).toDateString()}</TableCell>
                  <TableCell>{`$ ${expense.amount}`}</TableCell>
                </TableRow>
            )})}
            </TableBody>
          </Table>
        </TableContainer>
    </Paper>
  )
}

export default TableCard
