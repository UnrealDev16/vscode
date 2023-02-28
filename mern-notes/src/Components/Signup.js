import React from "react";
import { Button, TextField } from "@mui/material";

function Register(){
    return(
        <div>
            <center>
                <TextField variant="outlined" label="Email" type="email" />
            </center>
        </div>
    )
}

export default Register;