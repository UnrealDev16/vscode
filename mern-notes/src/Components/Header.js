import React from "react";
import { Button } from "@mui/material";
import "../App.css"
import styled from "styled-components";

function Header(){
    return(
        <div>
            <div style={{padding: 10}}>
                <Button id="home" variant="contained">Home</Button>

                <Button variant="contained" style={{position:"relative",marginLeft:"10px",float: "right"}}>Login</Button>
                <Button variant="contained" style={{float: "right"}}>Sign Up</Button>
            </div>
        </div>
    )
}

export default Header;