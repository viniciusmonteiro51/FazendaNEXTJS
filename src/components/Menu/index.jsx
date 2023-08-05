import styles from './styles.module.css'
import Link from "next/link";

export default function Menu(){
   
    return(
        <div className={styles.menu}>
            <ul className={styles.menu1}>
                <li>
                    <Link href="/">Inicio</Link>
                </li> 
                <li>
                    <Link href="/produtos">Produtos</Link>
                </li>
                <li>
                    <Link href="/quemsomos">Quem somos</Link>
                </li>
            </ul>
        </div>
    )
}