import { Card } from "./Card";
// import mainPageStyle from "./mainPage.module.css";
import { AddTaskButton } from "@/components/AddTaskButton";
import styles from "@/styles/mainStyle.module.css";
import { Header } from "./Header";

export const DoneCards = (props) => {
  return (
    <>
      <div className={styles.cardCont}>
        <Header name={"Done"} />
        {props.toDoItems.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
        <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
      </div>
    </>
  );
};
