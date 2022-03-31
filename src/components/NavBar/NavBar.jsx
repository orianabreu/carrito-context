import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import * as S from "./NavBarStyles";
import { useDarkContext } from '../../context/DarkContext';

export default function NarBar() {
  const { darkTheme, changeTheme } = useDarkContext();

  return (
    <S.Nav darkTheme={darkTheme}>
        <Link to="/shopping-cart">
            <ShoppingCartIcon fontSize='large' color='primary'/>
        </Link>

       <DarkModeIcon fontSize='large' onClick={changeTheme}/>
    </S.Nav>
  )
}
