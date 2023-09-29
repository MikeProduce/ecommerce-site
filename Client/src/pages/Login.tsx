


export default function Login() {

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h1 className="text-4xl font-bold mb-4">Login</h1>
            <p className="text-lg text-center mb-8">
                Login to your account.
            </p>
            <form className="flex flex-col items-center justify-center h-screen">
                <label className="text-lg text-center mb-8">
                    Username:
                    <input type="text" name="username" />
                </label>
                <label className="text-lg text-center mb-8">
                    Password:
                    <input type="password" name="password" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
}