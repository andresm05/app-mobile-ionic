import { IonGrid, IonRow, IonCol, IonText } from "@ionic/react";
import { useTask } from "../../../hooks";
import "./TaskInfo.scss";

export function TaskInfo() {
  const { totalTasks, totalTasksCompleted } = useTask();

  return (
    <div className="task-info-container">
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonText color="dark">{totalTasks}</IonText>
            <IonText color="medium">Tareas</IonText>
          </IonCol>
          <IonCol>
            <IonText color="dark">{totalTasksCompleted}</IonText>
            <IonText color="medium">Completadas</IonText>
          </IonCol>
        </IonRow>
      </IonGrid>
    </div>
  );
}
