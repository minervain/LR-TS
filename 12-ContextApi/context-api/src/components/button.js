import useTheme from "../context/ThemeContext"


export default function Button(){
    const data = useTheme();

    return(
        <div>
           Active theme: {data.theme}
            <br></br>
            <br/>
           <button onClick={() =>(data.theme === "dark" ? data.setTheme("light") : data.setTheme("dark") )}>Change from button</button>
        </div>
    )
}