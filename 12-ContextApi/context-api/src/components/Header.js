import useTheme from "../context/ThemeContext"

export default function Header(){

    const {theme, setTheme} = useTheme();
    return(
        <div>
            Active Theme {theme}
            <br></br>
            <br></br>
            <button onClick={() => (setTheme(theme === "light" ? "dark" : "light") )}>Change From header</button>
        </div>
    )
}