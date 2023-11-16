import React from 'react'
import { styled, useTheme } from '@mui/material/styles';

import { AppBar,Toolbar,IconButton,Typography} from '@mui/material';
import {Menu} from '@mui/icons-material'
import ChecklistIcon from '@mui/icons-material/Checklist';
 

const Header = styled(AppBar)`
z-index:1201;
background:#967969;
height:70px;
box-shadow : inset 0 -1px 0 0 #dadce0;

`;

const Heading = styled(Typography)`
color:#fff;
font-size:30px;
`



const HeaderBar = ({open, handleDrawer}) => {
  return (
    <Header open={open}>
    <Toolbar>
      <IconButton
        onClick={handleDrawer}
        edge="start"
        sx={{
          marginRight: '25px'
        }}
      >
        <Menu/>
      </IconButton>
      <ChecklistIcon/>
      <Heading>
       Listinator
      </Heading>
    </Toolbar>
  </Header>
  )
}

export default HeaderBar
