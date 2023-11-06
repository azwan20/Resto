import Link from "next/link";
import Background from "./resto/background";

export default function Register() {
    return (
        <>
            <div class="first">
                <div class="register2">
                    <img src="/register2.svg" alt="" />
                </div>
                <div class="register">
                    <h2>REGISTER</h2>
                    <form action="" class="d-block">
                        <div class="form-regis">
                            <div class="d-flex justify-content-between">
                                <div class="d-block">
                                    <label for="fName">First Name</label> <br />
                                    <input type="text" name="Fname" id="" style={{ width: '150px', margin: '0 20px' }} />
                                </div>
                                <div class="d-block">
                                    <label for="lName" style={{ paddingLeft: 0 }}>Last Name</label> <br />
                                    <input type="text" name="Lname" id="" style={{ width: '150px', marginRight: '20px' }} />
                                </div>
                            </div>
                            <label for="emial">Email Address</label>
                            <input type="email" name="email" id="" />
                            <label for="password">Password</label>
                            <input type="password" name="password" />
                            <label for="confirmPass">Confirm Password</label>
                            <input type="password" name="confirmPass" id="" />
                        </div>
                        <Link href="/resto/index2"><button type="submit">SUBMIT</button></Link>
                        <p>Already have account yet? <a href="/login">Login here</a></p>
                    </form>
                </div>

                <Background />
            </div>
        </>
    )
}