
import { Input } from "../../components/Input"
import { useSignUpForm } from "../sign-up/formValidation"
import { SignUpWrapper } from "./sign-up-components/SignUpWrapper"
import { ButtonSignUpSubmit } from "./sign-up-components/ButtonSubmit"
import { LoginLink } from "./sign-up-components/LoginLink"

export const SignUp = () => {

    const { formik, error, loading } = useSignUpForm()

    return (
        <SignUpWrapper>
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit} >
                {
                    error &&
                    <div className="text-red-500">{error.message}</div>
                }
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
                <ButtonSignUpSubmit formik={formik} />
                <LoginLink />
            </form>
        </SignUpWrapper>
    )
}

export default SignUp