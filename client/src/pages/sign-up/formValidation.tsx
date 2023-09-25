import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { FormikProps } from "formik";


interface FormData {
    password: string;
    email: string;
    lastName: string;
    firstName: string;
    confirmPassword: string;
}

interface UseBlogFormReturn {
    isLoading: boolean;
    errorMessage: string;
    formik: FormikProps<FormData>;
}
export const useSignUpForm = (): UseBlogFormReturn => {
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
        terms: Yup.boolean().oneOf([true], "Accept Terms & Conditions is required")
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const formik = useFormik<FormData>({
        initialValues: {
            email: "",
            firstName: "",
            lastName: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: validationSchema,
        onSubmit: async (values: FormData) => {
            try {
                setIsLoading(true);
                setErrorMessage("");
                console.log("Submitting form with values:", values); // Add this line

                //just needs endpoint
            }
            catch (error: unknown) {
                // Explicitly specify the type of error as AxiosError
                console.error("Error: did not successfully sign up", error);
                if (axios.isAxiosError(error)) {
                    if (error.response && error.response.data) {
                        setErrorMessage(error.response.data);
                    } else {
                        setErrorMessage("Something went wrong. Please try again later.");
                    }
                } else {
                    setErrorMessage("An unknown error occurred.");
                }
            } finally {
                setIsLoading(false);
            }
        }
    });
    return { formik, errorMessage, isLoading };
};