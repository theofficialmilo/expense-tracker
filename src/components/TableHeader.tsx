import React from 'react'
//Import Ui-Components
import {TableHead, TableRow, TableCell} from '@material-ui/core'

const TableHeader: React.FC = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell key="expense">Expense</TableCell>
        <TableCell key="type">Type</TableCell>
        <TableCell key="date">Date</TableCell>
        <TableCell key="amount">Amount</TableCell>
      </TableRow>
    </TableHead>
  )
}


export default TableHeader
