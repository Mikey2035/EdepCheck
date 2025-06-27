import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import Home from './pages/Home';
import Assessment from './pages/Assessment';
import Result from './pages/Result';
import History from './pages/History';
import Learn from './pages/Learn';
import Resources from './pages/Resources';
import Intro from './pages/Intro';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Login from './pages/Login';
import ForgotPassword from './pages/ForgotPassword';
import SymptomsCauses from './pages/SymptomsCauses';
import SplashScreen from './pages/SplashScreen';

import { home, clipboard, list, book, call, person } from 'ionicons/icons';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import './theme/variables.css';
import './theme/intro.css';
import './theme/login.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        {/* Public routes */}
        <Route path="/splash" component={SplashScreen} exact />
        <Route path="/intro" component={Intro} exact />
        <Route path="/signup" component={SignUp} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/forgot-password" component={ForgotPassword} exact />
        <Route path="/symptoms-causes" component={SymptomsCauses} exact />

      </IonRouterOutlet>

      {/* Tabs for authenticated routes */}
      <Route path={['/home', '/assessment', '/result', '/history', '/learn', '/resources', '/profile']}>
        <IonTabs>
          <IonRouterOutlet>
            <Route path="/home" component={Home} exact />
            <Route path="/assessment" component={Assessment} exact />
            <Route path="/result" component={Result} exact />
            <Route path="/history" component={History} exact />
            <Route path="/learn" component={Learn} exact />
            <Route path="/resources" component={Resources} exact />
            <Route path="/profile" component={Profile} exact />
            
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
            <IonTabButton tab="home" href="/home">
              <IonIcon icon={home} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="assessment" href="/assessment">
              <IonIcon icon={clipboard} />
              <IonLabel>Assess</IonLabel>
            </IonTabButton>
            <IonTabButton tab="history" href="/history">
              <IonIcon icon={list} />
              <IonLabel>History</IonLabel>
            </IonTabButton>
            <IonTabButton tab="learn" href="/learn">
              <IonIcon icon={book} />
              <IonLabel>Learn</IonLabel>
            </IonTabButton>
            <IonTabButton tab="resources" href="/resources">
              <IonIcon icon={call} />
              <IonLabel>Help</IonLabel>
            </IonTabButton>
            <IonTabButton tab="profile" href="/profile">
              <IonIcon icon={person} />
              <IonLabel>Profile</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </Route>

      <Redirect exact from="/" to="/splash" />
    </IonReactRouter>
  </IonApp>
);

export default App;
