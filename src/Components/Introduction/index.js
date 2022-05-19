import "./index.css"

export default function Introduction({darkMode}) {
    return(
        <div className="introduction-full">
            <h3 className={darkMode===true ? "header-text dark" : "header-text light"}>I am a</h3>
            <h1 className={darkMode===true ? "animated-text dark-animated" : "animated-text light-animated"}>Web Developer</h1>
            <h3 className={darkMode===true ? "footer-text dark" : "footer-text light"}>Based in Los Angeles</h3>
        </div>
    )
}