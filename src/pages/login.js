import Link from "next/link";
import Background from "./resto/background";

export default function Login() {
    return (
        <>
            <div class="first ">
                <div class="login2">
                    <img src="/login.svg" alt="" />
                </div>
                <div class="login">
                    <h1>LOGIN</h1>
                    <form action="" method="post">
                        <input type="text" name="username" id="" placeholder="Username" />
                        <input type="password" name="password" placeholder="Password" />
                        <input type="password" name="password" id="" placeholder="Confirm password" />
                        <Link href="/resto/index2"><button type="submit">LOGIN</button></Link>
                        <p>Not have account yet? <a href="/register">Register here</a></p>
                    </form>
                </div>
                <Background />
            </div>
        </>
    )
}