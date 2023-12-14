import { FC } from "react";
import { FormInputText } from "../../components/ui/FormInputText";
import { Button } from "@mui/material";
import { useLoacalStorage } from "../../hooks/useLocalStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm, DefaultValues } from "react-hook-form"
import { LoginUserInput, LoginUserSchema } from "../../lib/validations/user.schema";

export type FormValues = {
    email: string;
    password: string;
};

const defaultValues: DefaultValues<FormValues> = {
    email: '',
    password: ''
};
const LoginForm: FC = () => {
    const {
        reset,
        handleSubmit,
        control
    } = useForm<LoginUserInput>({
        resolver: zodResolver(LoginUserSchema),defaultValues
    })
    const navigate=useNavigate();
    const { getItem } = useLoacalStorage('user')
    
    const onSubmit = (data: FieldValues) => {
        const user=getItem()
        console.log(user);
        // setItem(data);
        if(data.email===user.email && data.password===user.password){
            navigate('/dashboard')
            toast.success('welcome to dashboard')
        }else{
            toast.error('Your ceredential is n\'t correct')
        }
        reset()
    }
    return (
        <>
            <FormInputText name="email" control={control} label="Email" />
            <FormInputText name="password" type="password" control={control} label="Password" />
            <Button type="submit" onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Login
            </Button>
        </>
    )
}

export default LoginForm;