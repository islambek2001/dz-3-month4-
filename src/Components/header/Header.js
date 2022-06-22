import React from "react";
import classes from  "./header.module.css";


function Header ({text}) {
    return (
        <ul>
            <li className={classes.names}>User - {text}</li>
            <li className={classes.names}>User - {text}</li>
            <li className={classes.names}>User - {text}</li>
        </ul>
    )
}

export default Header;