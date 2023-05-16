import useTheme from "../context/ThemeContext"

import Header from "./Header"
import Button from "./button"
import Profile from "./Profile"

export default function Container(){
    const {theme} = useTheme();

    return (
        <>
        <div className={`app ${theme === 'dark' ? 'dark' : 'light'}`}>
            <Header />
            --------------------
            <Button />
            --------------------
            <Profile />
        </div>
        </>
    )
}