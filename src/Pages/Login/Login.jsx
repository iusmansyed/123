import React, { useEffect, useState } from 'react';
import styles from './Login.module.css'; // Ensure this is used if needed for styling
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [err, setErr] = useState(false)

    let navigate = useNavigate();
    useEffect(() => {
        var i = localStorage.getItem("login");
        if (i) {
            navigate('/Dashboard')
        }
    })
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (pass === "" && email === "") {
            setErr(true)
        } else {
            try {
                await auth.signInWithEmailAndPassword(email, pass);
                localStorage.setItem("login", true);
                navigate('/Dashboard')
                console.log('email logged in successfully');
            } catch (error) {
                // Handle error
                console.error('Error logging in:', error.message);
                alert("Please Enter correct password")
            }
        }

    }
    const error = {
        color: "red",
        opacity: err ? "1" : 0,
        transition: "0.3s"
    }
    return (
        <>
            <section className={styles.Login}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className={styles.outterForm}>
                                <div className={styles.form}>
                                    <h1>Login</h1>
                                    <form action="" onSubmit={handleSubmit}>
                                        <div className={styles.inp}>
                                            <label htmlFor="">Email</label>
                                            <input type="email" value={email}
                                                onChange={(e) => setEmail(e.target.value)} />
                                            <p style={error}>Please fill the field</p>
                                        </div>
                                        <div className={styles.inp}>
                                            <label htmlFor="">Password</label>
                                            <input type="password" value={pass} onChange={(e) => setPass(e.target.value)} />
                                            <p style={error}>Please fill the field</p>
                                        </div>
                                        <div className={styles.forget}>
                                            <Link style={{ textDecoration: "none" }} to={"/reset"}><p>Forget Password</p></Link>
                                        </div>
                                        <div className={styles.btn}>
                                            <button type='submit'>Submit</button>
                                        </div>
                                    </form>
                                    <div className={styles.forget}>
                                        <Link style={{ textDecoration: "none" }} to={'/Sign-up'}> <p>Sign-up with a new account</p></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Login;
