import { IonCheckbox } from "@ionic/react";
import { DateTime } from "luxon";
import { useTask } from "../../../hooks";
import "./TaskItem.scss";
import { TaskItemTypes } from "./TaskItem.types";

export function TaskItem(props: TaskItemTypes.Props) {
  const { task } = props;
  const { checkUncheckCompleted } = useTask();

  const onClickCheckbox = (e: any) => {
    const isChecked = e.detail.checked;
    checkUncheckCompleted(task.id, isChecked);
  };

  const formatDate = (date: Date): string => {
    const time = new Date(date);
    return time.toISOString();
  };
  return (
    <div className="task-item">
      <div className="task-item__info">
        <span>{task.description}</span>
        <span>{DateTime.fromISO(formatDate(task.createdAt)).toRelative()}</span>
      </div>
      <IonCheckbox checked={task.completed} onIonChange={onClickCheckbox} />
    </div>
  );
}
