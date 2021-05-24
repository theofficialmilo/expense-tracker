import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

interface IProps {
  username: string
}

const Header = ({username}: IProps) => {
  return (
    <AppBar position='static' color='transparent' elevation={0} >
      <Toolbar disableGutters>
        <Typography variant="h4" >
           Hello {username}!
        </Typography>
      </Toolbar>
    </AppBar>
  )
}


export default Header
