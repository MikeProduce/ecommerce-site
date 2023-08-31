import { Input } from '../../components/Input';
import { useLoginForm } from '../login/formValidation';
import { LoginInWrapper } from '../login/login-components/LoginWrapper';
import { ForgotPasswordLink } from '../login/login-components/ForgotPasswordLink';
import { ButtonSubmit } from '../login/login-components/ButtonSubmit';
import { SignUpLink } from '../login/login-components/SignUpLink';

export const Login = () => {
    const { formik, error, loading } = useLoginForm();

    return (
        <LoginInWrapper>
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
                <SignUpLink />
            </form>
        </LoginInWrapper>
    );
};

export default Login;
