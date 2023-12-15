import styles from "@/styles/mainStyle.module.css";

const labels = ["low", "medium", "high"];

export const Card = ({ id, title, description, priority }) => {
  return (
    <div className={styles.card}>
      <h1>
        <input type="checkbox"></input>
        {title}
      </h1>
      <p> {description}</p>
      <div>{labels[priority]}</div>
      {/* <div>{id}</div> */}
    </div>
  );
};
