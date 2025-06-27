import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonButton, IonText
} from '@ionic/react';
import { useState } from 'react';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleReset = () => {
    if (!email) {
      setError('Please enter your email.');
      return;
    }

    console.log('Sending password reset link to:', email);
    setMessage('If this email is registered, a password reset link has been sent.');
    setError('');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput
            type="email"
            value={email}
            onIonChange={e => {
              setEmail(e.detail.value!);
              if (error) setError('');
              if (message) setMessage('');
            }}
          />
        </IonItem>

        {error && (
          <IonText color="danger">
            <p className="ion-padding-start">{error}</p>
          </IonText>
        )}
        {message && (
          <IonText color="success">
            <p className="ion-padding-start">{message}</p>
          </IonText>
        )}

        <IonButton expand="block" onClick={handleReset} className="ion-margin-top">
          Send Reset Link
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
