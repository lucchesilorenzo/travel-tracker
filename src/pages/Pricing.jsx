import PageNav from "../components/PageNav";
import styles from "./Pricing.module.css";

function Pricing() {
  return (
    <main className={styles.pricing}>
      <PageNav />
      <section>
        <div>
          <h2>
            Simple pricing.
            <br /> Just $9/month.
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi
            tempora neque rem, consequuntur reprehenderit magni odit ipsa
            deserunt ex dignissimos ad aliquid rerum explicabo, ea natus amet
            asperiores ratione voluptatem.
          </p>
        </div>
        <img src="/img-1.jpg" alt="City" />
      </section>
    </main>
  );
}

export default Pricing;
