import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonItem, IonLabel, IonInput, IonButton, IonText
} from '@ionic/react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

const Login: React.FC = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    try {
      interface LoginResponse {
  success: boolean;
  user?: {
    id: number;
    fullName: string;
    email: string;
    username: string;
    password: string;
  };
  error?: string;
}

const res = await axios.post<LoginResponse>('http://localhost:5000/api/login', { email, password });


      if (res.data.success) {
        localStorage.setItem('user', JSON.stringify(res.data.user)); // ✅ Save user info
        history.push('/profile'); // ✅ Redirect to profile
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput value={email} onIonChange={e => setEmail(e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} />
        </IonItem>

        {error && (
          <IonText color="danger">
            <p className="ion-padding">{error}</p>
          </IonText>
        )}

        <IonButton expand="block" className="ion-margin-top" onClick={handleLogin}>
          Log In
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Login;
