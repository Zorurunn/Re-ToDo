import { Card } from "./Card";
import { AddTaskButton } from "@/components/AddTaskButton";
import styles from "@/styles/mainStyle.module.css";
import { Header } from "./Header";

export const InProgressCards = (props) => {
  return (
    <>
      <div className={styles.cardCont}>
        <Header name={"In Progress"} />
        {props.toDoItems.map((item, index) => {
          return <Card key={index} {...item} />;
        })}
        <AddTaskButton setHidden={props.setHidden}></AddTaskButton>
      </div>
    </>
  );
};
