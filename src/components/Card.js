import styles from "@/styles/mainStyle.module.css";

export const Card = ({ id, title, description, priority }) => {
  return (
    <div className={styles.card}>
      <h1>
        <input type="checkbox"></input>
        {title}
      </h1>
      <p> {description}</p>
    </div>
  );
};
