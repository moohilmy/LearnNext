import Image from "next/image";
import Hero from '/public/images/Hero.svg'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className={`${styles.container}`}>
      <div className={styles.col}>
        <h1 className={styles.title}>Your Best Online shop destination!</h1>
        <p className={styles.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium minima libero voluptatum.</p>
        <button className={styles.button}>Shop now</button>
      </div>
      <div className={styles.col}>
          <Image className={styles.img} src={Hero} alt="Home image"/>
      </div>
    </div>
  );
}
