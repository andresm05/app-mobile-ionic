import {
  IonHeader,
  IonAvatar,
  IonProgressBar,
  IonText,
  IonIcon,
} from "@ionic/react";
import { useUser, useTask } from "../../hooks";
import { addCircleOutline } from "ionicons/icons";
import "./Header.scss";

export function Header() {
    const { avatar } = useUser();
    const {totalTasks, totalTasksCompleted, openFormTask} = useTask();
    const valueBar = (totalTasksCompleted*1) / totalTasks;

  return( 
    <IonHeader className="custom-header">
        <div className="custom-header__top">
            <IonAvatar>
                <img src={avatar} alt="avatar" />
            </IonAvatar>
            <IonIcon icon={addCircleOutline} onClick={openFormTask}/>
        </div>
        <div className="progress">
            <IonText color="dark" className="progress__title">Tu progreso</IonText>
            <div className="progress__info">
                <IonText color="dark">Tareas</IonText>
                <IonText color="dark">{totalTasksCompleted}/{totalTasks}</IonText>

            </div>
            <IonProgressBar value={valueBar} className="progress__bar"></IonProgressBar>
            </div>
        </IonHeader>
  );
}
