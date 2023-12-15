// import { Card } from "./Card";
// import mainPageStyle from "./mainPage.module.css";
// import { AddTaskButton } from "@/components/AddTaskButton";
import styles from "@/styles/mainStyle.module.css";

export const Header = (props) => {
  return (
    <>
      <div className={styles.header}>{props.name}</div>
    </>
  );
};
