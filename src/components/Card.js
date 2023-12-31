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
      <div className="flex justify-between ">
        <div></div>
        <div className="bg-gray-200 rounded-[5px] pl-[10px] pr-[10px]">
          {labels[priority]}
        </div>
      </div>
      {/* <div>{id}</div> */}
    </div>
  );
};
