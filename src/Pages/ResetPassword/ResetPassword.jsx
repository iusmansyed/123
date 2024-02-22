import React, { useState } from 'react'
import styles from './Reset.module.css'
const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [resetSent, setResetSent] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();

        try {
            // Send a password reset email
            await auth.sendPasswordResetEmail(email);

            // Password reset email sent successfully
            setResetSent(true);
        } catch (error) {
            // Handle error
            console.error('Error sending password reset email:', error.message);
            alert('Enter a valid email')
        }
    };

    return (
        <section className={styles.reset}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className={styles.outterForm}>
                            <div className={styles.form}>
                                <h1>Reset Password</h1>
                                {resetSent ? (
                                    <p>Password reset email sent. Check your inbox.</p>
                                ) : (
                                    <form onSubmit={handleResetPassword}>
                                        <div className={styles.inp}>
                                            <label>
                                                Email:
                                            </label>
                                            <input
                                                type="email"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className={styles.btn}>
                                            <button type='submit'>Reset Password</button>
                                        </div>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ResetPassword