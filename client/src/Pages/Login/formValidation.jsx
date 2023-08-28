import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";


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
                console.log("Submitting form with values:", values); // Add this line
                const response = await axios.post("http://127.0.0.1:5000/login", values);
                console.log(response);

            }
            catch (err) {
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