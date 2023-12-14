import {  Paper, Typography } from "@mui/material";
import LoginForm from "./LoginForm";

export default function Login() {
   
    return (
        <div style={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            height: '100vh'
        }}>
            <Paper
                style={{
                    display: "grid",
                    gridRowGap: "20px",
                    padding: "20px",
                    margin: "10px 300px",
                    minWidth:'400px'
                }}
            >
                <Typography variant="h4">Sign In</Typography>
                <LoginForm/>
            </Paper>
        </div>
    )
}