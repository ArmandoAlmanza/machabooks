import { useState } from "react";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";

const App = () => {
    const [state, setState] = useState("login");
    const handdleLogin = () => {
        setState(state === "login" ? "register" : "login");
    };
    return (
        <main className="grid place-items-center min-h-screen">
            {state === "login" ? (
                <LoginForm setState={handdleLogin} />
            ) : (
                <RegisterForm setState={handdleLogin} />
            )}
        </main>
    );
};

export default App;
