import styles from './login.module.css';
import LoginForm from "../features/LoginForm"

const Login = () => {
  return (
    <div className={styles.Container}>
      <h1>Login</h1>
      <LoginForm />
    </div>
  )
}

export default Login
