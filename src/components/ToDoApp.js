"use client";
import { createContext, useContext, useMemo, useState } from "react";
import { Container } from "@/components/Container";
import { ToDoCards } from "./ToDoCards";
import { InProgressCards } from "./InProgressCards";
import { StuckCards } from "./StuckCards";
import { DoneCards } from "./DoneCards";
import styles from "@/styles/mainStyle.module.css";
import { AddTaskButton } from "./AddTaskButton";
import { InputField } from "./InputField";
import { HeadBar } from "./HeadBar";
import { AddNewButton } from "./AddNewButton";

const DataContext = createContext();

export function ToDoApp() {
  const [searchVal, setSearchVal] = useState("");
  const [isHidden, setIsHidden] = useState(true);

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
      priority: 1,
    },
    {
      id: 0,
      title: "secondTitle",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",

      status: "inProgress",
      priority: 2,
    },
    {
      id: 0,
      title: "stuck",
      description:
        "The Impact of Technology on the Workplace: How Technology is Changing",
      status: "stuck",
      priority: 1,
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

  const visibleTodos = useMemo(() => {
    console.log(`filtering....`);
    return (
      <div className={styles.allContent}>
        <HeadBar />
        <div className={styles.allStatus}>
          <ToDoCards
            toDoItems={data.filter((item) => {
              return item.title.includes(searchVal) && item.status === "toDo";
            })}
          />

          <InProgressCards
            toDoItems={data.filter((item) => {
              return (
                item.title.includes(searchVal) && item.status === "inProgress"
              );
            })}
          />

          <StuckCards
            toDoItems={data.filter((item) => {
              return item.title.includes(searchVal) && item.status === "stuck";
            })}
          />

          <DoneCards
            toDoItems={data.filter((item) => {
              return item.title.includes(searchVal) && item.status === "done";
            })}
          />
        </div>
      </div>
    );
  }, [data, searchVal]);

  // const [isHidden, setIsHidden] = useState(true);

  return (
    <DataContext.Provider
      value={{
        setData,
        setSearchVal,
        setIsHidden,
      }}
    >
      <Container>
        {visibleTodos}
        <div style={{ display: isHidden ? "none" : "block" }}>
          <InputField
            getValue={(event) => {
              // if(event)
              event.preventDefault();
              // console.log(event.target.elements);
              const title = event.target.elements.title.value;
              const description = event.target.elements.description.value;
              const status = event.target.elements.statusList.value;
              const priority = event.target.elements.priorityList.value;
              if (title === "" || description == "") {
                alert("空白を入力してください");
                return;
              }

              setData(() => {
                const x = [
                  ...data,
                  { id: 0, title, description, status, priority },
                ];

                x.sort(function (a, b) {
                  return Number(b.priority) - Number(a.priority);
                });

                return x.map((item, index) => ({ ...item, id: index }));
              });
              setIsHidden(true);
            }}
          />
        </div>

        {/* <AddTaskButton /> */}
        {/* {<AddNewButton />} */}
      </Container>
    </DataContext.Provider>
  );
}
export const useData = () => useContext(DataContext);

{
  /* <button
          onClick={() => {
            setHidden((prev) => !prev);
          }}
        >
          towch
        </button> */
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
          }
        /> */
}
