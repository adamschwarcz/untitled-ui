import type { NextPage } from "next";
import { Button } from "../components/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h3 className={styles.heading}>Small buttons</h3>
      <div className={styles.hstack}>
        <div className={styles.vstack}>
          <Button color="primary" size="sm">
            Primary solid
          </Button>
          <Button color="danger" size="sm">
            Danger solid
          </Button>
          <Button color="neutral" size="sm">
            Neutral solid
          </Button>
        </div>
        <div className={styles.vstack}>
          <Button color="primary" variant="outlined" size="sm">
            Primary outlined
          </Button>
          <Button color="neutral" variant="outlined" size="sm">
            Danger outlined
          </Button>
          <Button color="danger" variant="outlined" size="sm">
            Neutral outlined
          </Button>
        </div>
        <div className={styles.vstack}>
          <Button color="primary" variant="ghost" size="sm">
            Primary ghost
          </Button>
          <Button color="neutral" variant="ghost" size="sm">
            Danger ghost
          </Button>
          <Button color="danger" variant="ghost" size="sm">
            Neutral ghost
          </Button>
        </div>
      </div>
      <h3 className={styles.heading}>Medium buttons</h3>
      <div className={styles.hstack}>
        <div className={styles.vstack}>
          <Button color="primary" size="md">
            Primary solid
          </Button>
          <Button color="danger" size="md">
            Danger solid
          </Button>
          <Button color="neutral" size="md">
            Neutral solid
          </Button>
        </div>
        <div className={styles.vstack}>
          <Button color="primary" variant="outlined" size="md">
            Primary outlined
          </Button>
          <Button color="neutral" variant="outlined" size="md">
            Danger outlined
          </Button>
          <Button color="danger" variant="outlined" size="md">
            Neutral outlined
          </Button>
        </div>
        <div className={styles.vstack}>
          <Button color="primary" variant="ghost" size="md">
            Primary ghost
          </Button>
          <Button color="neutral" variant="ghost" size="md">
            Danger ghost
          </Button>
          <Button color="danger" variant="ghost" size="md">
            Neutral ghost
          </Button>
        </div>
      </div>
    </main>
  );
};

export default Home;
