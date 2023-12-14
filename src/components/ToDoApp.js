"use client";
import { createContext, useContext, useMemo, useState } from "react";
// import { MainPage } from "@/app/mainPage";
import { Container } from "@/components/Container";
import { ToDoCards } from "./ToDoCards";
import { InProgressCards } from "./InProgressCards";
import { StuckCards } from "./StuckCards";
import { DoneCards } from "./DoneCards";
import styles from "@/styles/mainStyle.module.css";
import { AddTaskButton } from "./AddTaskButton";
import { InputField } from "./InputField";

const DataContext = createContext();

export function ToDoApp() {
  const [searchVal, setSearchVal] = useState("");
  const searchText = (event) => {
    setSearchVal(event.target.value);
  };

  const [data, setData] = useState([
    {
      id: 0,
      title: "firstTitle",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      status: "toDo",
      priority: 0,
    },
    {
      id: 0,
      title: "firstTitle",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      status: "toDo",
      priority: 0,
    },
    {
      id: 0,
      title: "secondTitle",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",

      status: "inProgress",
      priority: 0,
    },
    {
      id: 0,
      title: "stuck",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      status: "stuck",
      priority: 0,
    },
    {
      id: 0,
      title: "todo",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      status: "done",
      priority: 0,
    },
  ]);

  const [hidden, setHidden] = useState(true);

  const visibleTodos = useMemo(() => {
    console.log(`filtering....`);
    return (
      <div className={styles.allStatus}>
        <ToDoCards
          toDoItems={data.filter((item) => {
            return item.title.includes(searchVal) && item.status === "toDo";
          })}
          setHidden={setHidden}
        />

        <InProgressCards
          toDoItems={data.filter((item) => {
            return (
              item.title.includes(searchVal) && item.status === "inProgress"
            );
          })}
          setHidden={setHidden}
        />

        <StuckCards
          toDoItems={data.filter((item) => {
            return item.title.includes(searchVal) && item.status === "stuck";
          })}
          setHidden={setHidden}
        />

        <DoneCards
          toDoItems={data.filter((item) => {
            return item.title.includes(searchVal) && item.status === "done";
          })}
          setHidden={setHidden}
        />
      </div>
    );
  }, [data, searchVal]);

  // const [isHidden, setIsHidden] = useState(true);

  return (
    <DataContext.Provider
      value={{
        // isHidden,
        // setIsHidden,
        setData,
      }}
    >
      <Container>
        {visibleTodos}

        {/* <InputField
          getValue={(event) => {
            event.preventDefault();
            console.log(event.target.elements.statusList.value);
            const title = event.target.elements.title.value;
            const description = event.target.elements.description.value;
            const status = event.target.elements.statusList.value;

            setData(() => {
              const x = [...data, { id: 0, title, description, status }];

              return x.map((item, index) => ({
                ...item,
                id: index,
              }));
            });
          }}
          setHidden={setHidden}
        /> */}
        <div style={{ display: hidden ? "none" : "block" }}>
          <InputField
            getValue={(event) => {
              event.preventDefault();
              console.log(event.target.elements.statusList.value);
              const title = event.target.elements.title.value;
              const description = event.target.elements.description.value;
              const status = event.target.elements.statusList.value;

              setData(() => {
                const x = [...data, { id: 0, title, description, status }];

                return x.map((item, index) => ({
                  ...item,
                  id: index,
                }));
              });
            }}
            setHidden={setHidden}
          />
        </div>

        {/* <AddTaskButton /> */}
        <button
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          towch
        </button>
      </Container>
    </DataContext.Provider>
  );
}

{
  /* <InputField
getValue={(event) => {
  event.preventDefault();
  console.log(event.target.elements.statusList.value);
  const title = event.target.elements.title.value;
  const description = event.target.elements.description.value;
  const status = event.target.elements.statusList.value;

  setData(() => {
    const x = [...data, { id: 0, title, description, status }];

    return x.map((item, index) => ({
      ...item,
      id: index,
    }));
  });
}}
/> */
}

export const useData = () => useContext(DataContext);
