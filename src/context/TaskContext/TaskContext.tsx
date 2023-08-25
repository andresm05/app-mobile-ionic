import { useEffect, useState, createContext, useRef } from "react";
import { IonModal, IonContent } from "@ionic/react";
import { size } from "lodash";
import { TaskContextTypes } from "./TaskContext.types";
import { TaskForm } from "../../components/Task";
import { TaskModel } from "../../models";
import { Task } from "../../api";

const taskController = new Task();

export const TaskContext = createContext<TaskContextTypes.Context>({
  totalTasks: 0,
  totalTasksCompleted: 0,
  tasks: [],
  completedTasks: [],
  openFormTask: () => {},
  createTask: () => {},
  checkUncheckCompleted: () => {},
});

export function TaskProvider(props: TaskContextTypes.Props) {
  const { children } = props;
  const [tasks, setTasks] = useState<TaskModel[]>([]);
  const [completedTasks, setCompletedTasks] = useState<TaskModel[]>([]);
  const [totalTasks, setTotalTasks] = useState<number>(0);
  const [totalTasksCompleted, setTotalTasksCompleted] = useState<number>(0);
  const modalRef = useRef<HTMLIonModalElement>(null);

  const openFormTask = () => modalRef.current?.present();
  const closeFormTask = () => modalRef.current?.dismiss();

  useEffect(() => {
    obtainTasks();
  }, []);

  const createTask = (task: TaskModel) => {
    taskController.create(task);
    obtainTasks();
  };

  const obtainTasks = () => {
    const response = taskController.obtain();
    response.sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );

    const tasksUncompleted = response.filter((task) => !task.completed);
    const tasksCompleted = response.filter((task) => task.completed);

    setCompletedTasks(tasksCompleted);

    setTasks(tasksUncompleted);

    setTotalTasks(size(response));
    setTotalTasksCompleted(size(tasksCompleted));
  };

  const checkUncheckCompleted = (id: string, check: boolean) => {
    const newTasks = [...tasks, ...completedTasks];
    newTasks.filter((task) => {
      if (task.id === id) {
        task.completed = check;
      }
      return task;
    });

    taskController.changeAllTasks(newTasks);
    obtainTasks();
  };

  const valueContext: TaskContextTypes.Context = {
    totalTasks,
    totalTasksCompleted,
    tasks,
    completedTasks,
    openFormTask,
    createTask,
    checkUncheckCompleted,
  };

  return (
    <TaskContext.Provider value={valueContext}>
      {children}
      <IonModal
        ref={modalRef}
        trigger="open-modal"
        initialBreakpoint={0.35}
        breakpoints={[0, 0.35]}
      >
        <IonContent className="ion-padding">
          <TaskForm onClose={closeFormTask} />
        </IonContent>
      </IonModal>
    </TaskContext.Provider>
  );
}
