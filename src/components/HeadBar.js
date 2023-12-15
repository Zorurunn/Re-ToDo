import { useState } from "react";
import styles from "@/styles/mainStyle.module.css";
import { useData } from "./ToDoApp";

export function HeadBar() {
  const { setSearchVal } = useData();
  const searchText = (event) => {
    console.log(event.target.value);
    setSearchVal(event.target.value);
  };

  return (
    <div>
      <div className={styles.headBar}>
        <div className={styles.headText}>To Do Application</div>
        <div className={styles.searchBar}>
          <div className={styles.headText}>SEARCH</div>
          <input
            onChange={searchText}
            className={styles.headText}
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
