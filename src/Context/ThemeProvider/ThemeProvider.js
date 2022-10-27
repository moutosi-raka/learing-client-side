import React from 'react';
import { useState } from 'react';
import { createContext } from 'react';


export const ThemeContext = createContext("light");

const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light")
    
    const toggleTheme = ()=>{
        setTheme((curr)=> (curr==="light")? "dark": "light")
    }

    const themeInfo = {theme,toggleTheme}
    return (
        <ThemeContext.Provider value={themeInfo }>
               {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;