import PageNav from "../components/PageNav";
import styles from "./Product.module.css";

function Product() {
  return (
    <main className={styles.product}>
      <PageNav />
      <section>
        <img src="/img-2.jpg" alt="Man in a camp" />
        <div>
          <h2>About Travel Tracker.</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
            alias nesciunt nobis consectetur, saepe, totam qui ducimus
            exercitationem dolores quia ea eum reprehenderit. Nisi at saepe
            corrupti accusantium eius facere!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi ad
            consequuntur ipsa quibusdam minima unde neque vitae nisi asperiores
            voluptatem?
          </p>
        </div>
      </section>
    </main>
  );
}

export default Product;
