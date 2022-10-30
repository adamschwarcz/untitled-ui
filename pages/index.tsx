import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { Button } from "../components/Button";
import { Select } from "../components/Select";
import { TextField } from "../components/TextField";
import { Option } from "../components/Option";

const Home: NextPage = () => {
  return (
    <main className={styles.main}>
      <h3 className={styles.heading}>Small buttons</h3>
      <div className={styles.vstack}>
        <div className={styles.hstack}>
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
        <div className={styles.hstack}>
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
        <div className={styles.hstack}>
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
      <div className={styles.vstack}>
        <div className={styles.hstack}>
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
        <div className={styles.hstack}>
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
        <div className={styles.hstack}>
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
      <h3 className={styles.heading}>Small text fields</h3>
      <div className={styles.hstack}>
        <div className={styles.vstack}>
          <TextField size="sm" placeholder="Type something in" />
          <Select size="sm" placeholder="Select an option">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
          </Select>
        </div>
      </div>
      <h3 className={styles.heading}>Medium text fields</h3>
      <div className={styles.hstack}>
        <div className={styles.vstack}>
          <TextField size="md" placeholder="Type something in" />
          <Select placeholder="Select an option">
            <Option>Option 1</Option>
            <Option>Option 2</Option>
            <Option>Option 3</Option>
          </Select>
        </div>
      </div>
    </main>
  );
};

export default Home;
