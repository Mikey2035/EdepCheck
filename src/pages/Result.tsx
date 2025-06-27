import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonButton
} from '@ionic/react';
import { useLocation, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { saveResult } from '../services/result.service'; 

const Result: React.FC = () => {
  const location = useLocation<{ score: number }>();
  const history = useHistory();
  const state = location.state as any;

  const score = state?.score || 0;


  const getSeverity = (s: number) => {
    if (s < 5) return 'Minimal';
    if (s < 10) return 'Mild';
    if (s < 15) return 'Moderate';
    if (s < 20) return 'Moderately Severe';
    return 'Severe';
  };
  const severity = getSeverity(score);

  const recommendations = {
    Minimal: "Maintain healthy habits and monitor your mood.",
    Mild: "Consider lifestyle changes and re-screening.",
    Moderate: "Monitor closely and consider talking to someone.",
    'Moderately Severe': "Seek professional help if possible.",
    Severe: "Strongly consider seeking immediate professional support."
  };

  const userId = parseInt(localStorage.getItem('user_id') || '0', 10); // or retrieve from auth context

useEffect(() => {
  if (userId) {
    saveResult(score, severity, userId);
  }
}, [score, severity, userId]);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Result</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <h2>Your Score: {score}</h2>
        <h3>Severity: {severity}</h3>
        <p>{recommendations[severity as keyof typeof recommendations]}</p>
        <IonButton expand="block" onClick={() => history.push('/history')}>View History</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Result;
