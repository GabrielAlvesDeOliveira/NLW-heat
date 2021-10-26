import { useContext } from 'react'
import { VscGithub } from 'react-icons/vsc'
import { AuthContext } from '../../contexts/auth'

import styles from './styles.module.scss'

export function LoginBox(){
    
    const {signInUrl} = useContext(AuthContext)
    
    return(
       <div className={styles.loginBoxWrapper}>
           <strong>Entre e compartilhe sua mensagem.</strong>
           <a href={signInUrl} className={styles.signInWithGithub}>
               <VscGithub size="24" />
               Entrar com seu github.
           </a>
       </div>
    )
}