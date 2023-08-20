import React from 'react';
import { Tooltip } from '@mui/material';
import Logonew from '../assets/Magnolia.jpg'

function Logo() {
    return (
      <Tooltip title="Inicio" arrow>
        <img src={Logonew} alt="Inicio" />
      </Tooltip>
      )
  }
  
  export default Logo;