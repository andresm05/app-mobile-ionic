import { IonPage, IonContent } from "@ionic/react";
import { Avatar } from "../components/Profile";
import { TaskInfo } from "../components/Profile";
import { MenuOptions } from "../components/Profile";

export function Settings() {
  return (
    <IonPage>
      <IonContent>
        <Avatar />
        <TaskInfo />
        <MenuOptions />
      </IonContent>
    </IonPage>
  );
}
