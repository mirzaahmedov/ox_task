import styles from './login.module.css';
import LoginForm from "../features/LoginForm"

const Login = () => {
  return (
    <div className={styles.Container}>
      <LoginForm />
    </div>
  )
}

export default Login
