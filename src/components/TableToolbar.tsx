import React from 'react'
import clsx from 'clsx'
//Import Ui-Components
import {Toolbar, Typography, Tooltip, IconButton, makeStyles, Theme} from '@material-ui/core'
//Import Icons
import {Delete} from '@material-ui/icons'

//Setting of Props Values & Types
interface IProps {
  numSelected: number,
  handleClear: Function
}

//Define Component Style
const useStyles = makeStyles((theme: Theme)=> ({
  root: {
    paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(1),
  },
  selected: theme.palette.type === 'light'
    ? {
      color: '#fff',
      backgroundColor: theme.palette.primary.main,
    }
    : {
      color: theme.palette.secondary.main,
      backgroundColor: '#fff',
  },
  selectedTitle:{
    flexGrow: 1
  }
}))

//Return of Componenet
const TableToolbar: React.FC<IProps> = ({numSelected, handleClear}) => {
  const classes = useStyles()

  const handleOnClick = (e: React.MouseEvent) => {
    e.preventDefault();
    handleClear()
  }

  return (
    <Toolbar className={clsx(classes.root, {[classes.selected]:numSelected>0})}>
      {numSelected > 0 ? (
       <Typography className={classes.selectedTitle}>{numSelected} selected</Typography> 
      ): <Typography>Expenses</Typography>}
      {numSelected > 0 && 
        <Tooltip title="Delete">
          <IconButton aria-label="delete" color='inherit' onClick={handleOnClick}>
            <Delete/>
          </IconButton>
        </Tooltip>
      }
    </Toolbar>
  )


}

export default TableToolbar
