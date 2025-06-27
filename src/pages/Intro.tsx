// --- src/pages/Intro.tsx ---
import {
  IonPage, IonContent, IonButton, IonText
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import '../theme/intro.css';

const Intro: React.FC = () => {
  const history = useHistory();
  return (
    <IonPage>
      <IonContent className="intro-page">
        <div className="intro-content">
          <img src="/images/Brainicon.png" alt="E-DepCheck" className="intro-image" />
          <IonText color="light">
            <h1>E-Depression Checker</h1>
            <p>Your mental health matters. Take the first step towards understanding your feelings.</p>
          </IonText>
          <IonButton expand="block" shape="round" color="light" onClick={() => history.push('/signup')}>
            Get started
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};
export default Intro;