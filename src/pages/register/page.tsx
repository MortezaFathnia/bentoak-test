
import { Paper, Typography } from "@mui/material";
import RegisterForm from './RegisterForm'


export default function Register() {
   
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
                }}
            >
                <Typography variant="h4">Sign Up To Get Started</Typography>
                <RegisterForm/>
            </Paper>
        </div>
    )
}