import PageNav from "../components/PageNav";
import styles from "./Homepage.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";

function Homepage() {
  return (
    <main className={styles.homepage}>
      <PageNav />
      <section>
        <h1>
          You travel the world.
          <br /> Travel Tracker keeps track of your adventures.
        </h1>
        <h2>
          A world map that tracks your footsteps into every city you can think
          of. Never forget your wonderful experiences, and show your friends how
          you have wandered the world.
        </h2>
        <Link to="/app">
          <Button>Start tracking now</Button>
        </Link>
      </section>
    </main>
  );
}

export default Homepage;
