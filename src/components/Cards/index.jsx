import styles from './styles.module.css';
import Image from 'next/image';

export default function Cards() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.box}>
          <Image src="/uva.png" alt="imagem-uvas" width={387} height={248} />
          <h1 className={styles.producao}>Produção de Uva</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>

        <div className={styles.box}>
          <Image src="/gado.png" alt="imagem-gados" width={387} height={248} />
          <h1 className={styles.producao}>Produção de Gado</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>

        <div className={styles.box}>
          <Image src="/plantacao.png" alt="imagem-laranjas" width={387} height={248} />
          <h1 className={styles.producao}>Produção de Laranja</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>

      </div>



      <div className={styles.container}>
        <div className={styles.box}>
          <Image src="/ovelha.png" alt="imagem-caprinos" width={387} height={248} />
          <h1 className={styles.producao}>Caprinos</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>

        <div className={styles.box}>
          <Image src="/galinha.png" alt="imagem-galinhas" width={387} height={248} />
          <h1 className={styles.producao}>Produção de ovos</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>

        <div className={styles.box}>
          <Image src="/tomate.png" alt="imagem-tomates" width={387} height={248} />
          <h1 className={styles.producao}>Produção de tomate</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>

      </div>



      <div className={styles.container}>
        <div className={styles.box}>
          <Image src="/alface.png" alt="imagem-alface" width={387} height={248} />
          <h1 className={styles.producao}>Hortifruti</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde velit
            deserunt numquam culpa. Ducimus, quos dolore. Maxime dolorem odit
            impedit velit, ullam aliquam recusandae harum est debitis, incidunt,
            unde blanditiis.
          </p>
          <button className={styles.botao}>
            <p>Saiba Mais</p>
          </button>
        </div>
      </div>
    </div>
  );
}