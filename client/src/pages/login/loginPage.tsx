import { Input } from '../../components/Input';
import { useLoginForm } from './formValidation.jsx';
import { LoginInWrapper } from './login-components/LoginWrapper';
import { ForgotPasswordLink } from './login-components/ForgotPasswordLink';
import { ButtonSubmit } from './login-components/ButtonSubmit.tsx';
import { SignUpLink } from './login-components/SignUpLink';
import { OauthButton } from '../../components/OauthButton.tsx'

export const Login = () => {
    const { formik, error, loading }: { formik: any; error: any, loading: any } = useLoginForm();

    return (
        <LoginInWrapper>
            {loading && <div className="text-green-500">Loading...</div>}
            {error && <div className="text-red-500">{error.message}</div>}
            <form className="space-y-4 md:space-y-6" onSubmit={formik.handleSubmit}>
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
                <ForgotPasswordLink />
                <ButtonSubmit formik={formik} />
            </form>
            <OauthButton />
            <SignUpLink />

        </LoginInWrapper>
    );
};

export default Login;
