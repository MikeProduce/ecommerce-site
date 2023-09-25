
import { Input } from "../../components/Input"
import { useSignUpForm } from "./formValidation"
import { SignUpWrapper } from "./sign-up-components/SignUpWrapper"
import { ButtonSignUpSubmit } from "./sign-up-components/ButtonSubmit"
import { LoginLink } from "./sign-up-components/LoginLink"
import { FormikProps } from "formik";
import { OauthButton } from "../../components/OauthButton"


interface SignUpFormProps {
    email: string;
    password: string;
    lastName: string;
    firstName: string;
    confirmPassword: string;
}


export const SignUp = () => {

    const { formik, errorMessage, isLoading }: {
        isLoading: boolean;
        errorMessage: string;
        formik: FormikProps<SignUpFormProps>;
    } = useSignUpForm()

    return (
        <SignUpWrapper>
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                {
                    errorMessage &&
                    <div className="text-red-500">{errorMessage}</div>
                }
                <Input
                    label="First Name"
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your first name"
                    required={true}
                    htmlFor="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    error={formik.errors.firstName}
                />
                <Input
                    label="Last Name"
                    type="text"
                    name="lastName"
                    id="lastName"
                    placeholder="Enter your last name"
                    required={true}
                    htmlFor="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    error={formik.errors.lastName}
                />
                <Input
                    label="Email"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    required={true}
                    htmlFor="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Input
                    label="Password"
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    required={true}
                    htmlFor="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <Input
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    required={true}
                    htmlFor="confirmPassword"
                    value={formik.values.confirmPassword}
                    onChange={formik.handleChange}
                    error={formik.errors.confirmPassword}
                />
                {isLoading ? <div className="text-green-500">Loading...</div> :
                    <ButtonSignUpSubmit formik={formik} />
                }
            </form>
            <OauthButton />
            <LoginLink />
        </SignUpWrapper>
    )
}

export default SignUp