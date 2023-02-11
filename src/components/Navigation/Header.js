import { useRouter } from "next/router";
import { useState } from "react";
import styles from '../../styles/Header.module.css';



const Header = () =>{
    const [HamburgerState,setHamburgerState] = useState(false)
    const router = useRouter();


    return (
        <header className={styles.header}>
            <img src="logo.svg" className={styles.Logo}></img>
            <ul className={styles.NavBar}>
                <li className={styles.NavLink}>Home</li>
                <li className={styles.NavLink}>About</li>
                <li className={styles.NavLink}>Contact</li>
            </ul>
        </header>
    )
}

export default Header;