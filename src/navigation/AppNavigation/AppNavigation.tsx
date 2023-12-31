import { IonReactRouter } from "@ionic/react-router";
import {
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { listOutline, settingsOutline } from "ionicons/icons";
import { Route, Redirect } from "react-router-dom";
import { Settings, Tasks } from "../../screens";
import "./AppNavigation.scss";

export function AppNavigation() {
  return (
    <IonReactRouter>
      <IonTabs className="navigation-ion-tabs">
        <IonRouterOutlet>
          <Route exact path="/tasks" component={Tasks} />
          <Route exact path="/settings" component={Settings} />
          <Route exact path="/">
            <Redirect to="/tasks" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="tab-bar">
          <IonTabButton tab="tasks" href="/tasks">
            <IonIcon icon={listOutline} />
          </IonTabButton>
          <IonTabButton tab="settings" href="/settings">
            <IonIcon icon={settingsOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  );
}
