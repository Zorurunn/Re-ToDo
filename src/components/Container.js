// import mainPageStyle from '../app/mainPage.module.css'
import styles from "@/styles/mainStyle.module.css";
import { AddTaskButton } from "./AddTaskButton";

export const Container = (props) => {
  return (
    <>
      <div className={styles.container}>{props.children}</div>
    </>
  );
};
