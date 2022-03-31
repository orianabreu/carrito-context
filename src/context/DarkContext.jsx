import React, { useState, useEffect, useContext } from 'react';

const DarkContext = React.createContext();

export const useDarkContext = () => {
    return useContext(DarkContext);
}

export default function DarkProvider({ children }) {
    const [darkTheme, setDarkTheme] = useState(false);

    useEffect(() => {
       document.body.style.backgroundColor = darkTheme ? "#2b2d42" : "white"
    });

    const changeTheme = () => {
        setDarkTheme(!darkTheme);
    }

    const store = {
        darkTheme,
        changeTheme
    }

  return (
    <DarkContext.Provider value={store}>
        {children}
    </DarkContext.Provider>
  )
}
