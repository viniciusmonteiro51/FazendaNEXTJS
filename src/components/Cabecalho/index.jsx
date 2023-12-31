import styles from './styles.module.css';
import Image from 'next/image';

export default function Cabecalho() {
  return (
    <header> 
      <div className={styles.container}>
        <Image
          src="/fazenda.png"
          alt="Imagem do Cabeçalho"
          width={1920}
          height={535}
          className={styles.imagem}
        />
        <Image 
        src="/logo.png"
        alt="Imagem da logo"
        layout='fill'
        objectFit='none'
        className={styles.logo}
        />
        <h1 className={styles.meio}>Fazenda Orgânica</h1>
      </div>
    </header>
  );
}
