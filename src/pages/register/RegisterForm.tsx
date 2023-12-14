import { FC } from "react";
import { FormInputText } from "../../components/ui/FormInputText";
import { Button } from "@mui/material";
import { useLoacalStorage } from "../../hooks/useLocalStorage";
import { RegisterUserInput, RegisterUserSchema } from "../../lib/validations/user.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { type FieldValues, useForm, DefaultValues } from "react-hook-form"
import { useNavigate } from "react-router-dom";

export type FormValues = {
    email: string;
    password: string;
    confirmPassword: string;
};

const defaultValues: DefaultValues<FormValues> = {
    email: '',
    password: '',
    confirmPassword: ''
};
const RegisterForm: FC = () => {
    const {
        reset,
        handleSubmit,
        control
    } = useForm<RegisterUserInput>({
        resolver: zodResolver(RegisterUserSchema),defaultValues
    })
    const { setItem } = useLoacalStorage('user')
    const navigate=useNavigate()
    const onSubmit = (data: FieldValues) => {
        setItem(data);
        reset();
        navigate('/login');
    }
    return (
        <>
            <FormInputText name="email" control={control} label="Email" />
            <FormInputText name="password" type="password" control={control} label="Password" />
            <FormInputText name="confirmPassword" type="password" control={control} label="Confrim Password" />
            <Button type="submit" onClick={handleSubmit(onSubmit)} variant={"contained"}>
                Register
            </Button>
        </>
    )
}

export default RegisterForm;