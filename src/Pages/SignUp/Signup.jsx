import React, { useState } from 'react'
import styles from './sign.module.css'
import { Link } from 'react-router-dom'
import { auth } from '../../Components/Firebase/Firebase';
const Signup = () => {
    const [email, setEmail] = useState("")
    const [pass, setPass] = useState("")
    const [err, setErr] = useState(false)
    const handleSignUp = async (e) => {
      e.preventDefault();
      
      if (pass === "" && email === "") {
        setErr(true)
    } else {
        try {
            await auth.createUserWithEmailAndPassword(email, pass);
            localStorage.setItem("login", true);
            navigate('/')
            console.log('email logged in successfully');
        } catch (error) {
            // Handle error
            console.error('Error logging in:', error.message);
            alert("Please Enter correct password")
        }
    }

    };
    const error = {
        color: "red",
        opacity: err ? "1" : 0,
        transition: "0.3s"
    }
  return (
    <section className={styles.Login}>
    <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <div className={styles.outterForm}>
                    <div className={styles.form}>
                        <h1>Sign-up</h1>
                        <form action="" onSubmit={handleSignUp}>
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
                         
                            <div className={styles.btn}>
                                <button type='submit'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default Signup