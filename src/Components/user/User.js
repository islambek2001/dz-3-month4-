import React from "react";
import classes from  "./user.module.css";


function User ({text}) {
    return (
        <ul>
            <li className={classes.names}>Header - {text}</li>
            <li className={classes.names}>Header - {text}</li>
            <li className={classes.names}>Header - {text}</li>
        </ul>
    )
}

export default User;