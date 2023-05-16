import { createContext, useState,useEffect, useContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider  = ({ children }) => {

    const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

    const values = {
        theme,
        setTheme
    }

    useEffect( () => {
        localStorage.setItem("theme", theme  )
    }, [theme])

    return(
        <ThemeContext.Provider value={values}>
            {children}
        </ThemeContext.Provider>
    )
}
const useTheme = () => useContext(ThemeContext)
export default useTheme;

