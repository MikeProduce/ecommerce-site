import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
// import { useSignIn } from "react-auth-kit";
import { useNavigate } from 'react-router-dom'


export const useLoginForm = () => {
    const validationSchema = Yup.object().shape({
        email: Yup
            .string()
            .email("Please enter a valid email")
            .required("Required"),
        password: Yup
            .string()
            .min(8)
            .matches(
                /^[a-zA-Z0-9!@#$%^&*()_+-]+$/,
                "Password must only contain valid characters"
            ),
        confirmPassword: Yup
            .string()
            .min(8)
            .matches(
                /^[a-zA-Z0-9!@#$%^&*()_+-]+$/,
                "Password must only contain valid characters"
            ),
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    // const signIn = useSignIn();
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values) => {
            try {
                setLoading(true);
                setError(null);
                const response = await axios.post("http://localhost:5000/login", values);
                console.log(response.data.email);
                // signIn({
                //     token: response.data.token,
                //     expiresIn: 3600,
                //     tokenType: "Bearer",
                //     authState: { email: response.data.email },
                // });
                navigate('/');
            }
            catch (err: any) {
                setError(err);
                console.log(err);
            }
            finally {
                setLoading(false);
            }
        }
    });
    return { formik, error, loading };
};