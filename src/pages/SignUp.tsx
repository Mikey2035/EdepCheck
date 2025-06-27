import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonInput, IonItem, IonLabel, IonButton, IonIcon, IonText
} from '@ionic/react';
import { eye, eyeOff } from 'ionicons/icons';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { registerUser } from '../services/user.service';

const SignUp: React.FC = () => {
  const history = useHistory();
  const [form, setForm] = useState({ name: '', email: '', username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (key: string, value: string) => {
    setForm(prev => ({ ...prev, [key]: value }));
    if (error) setError('');
  };

  const handleSubmit = async () => {
    const { name, email, username, password } = form;
    if (!name || !email || !username || !password) {
      setError('Please fill in all fields.');
      return;
    }

    try {
      const result = await registerUser({
        fullName: name,
        email,
        username,
        password,
      });

      if (result.success) {
        history.push('/home');
      } else {
        setError(result.error || 'Registration failed.');
      }
    } catch (err) {
      setError('Server error. Please try again.');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonItem>
          <IonLabel position="floating">Full Name</IonLabel>
          <IonInput value={form.name} onIonChange={e => handleChange('name', e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Email</IonLabel>
          <IonInput type="email" value={form.email} onIonChange={e => handleChange('email', e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Username</IonLabel>
          <IonInput value={form.username} onIonChange={e => handleChange('username', e.detail.value!)} />
        </IonItem>
        <IonItem>
          <IonLabel position="floating">Password</IonLabel>
          <IonInput
            type={showPassword ? 'text' : 'password'}
            value={form.password}
            onIonChange={e => handleChange('password', e.detail.value!)}
          />
          <IonIcon
            slot="end"
            icon={showPassword ? eyeOff : eye}
            onClick={() => setShowPassword(!showPassword)}
            style={{ cursor: 'pointer' }}
          />
        </IonItem>

        {error && (
          <IonText color="danger">
            <p className="ion-padding-start ion-margin-top">{error}</p>
          </IonText>
        )}

        <IonButton expand="block" onClick={handleSubmit} className="ion-margin-top">Sign Up</IonButton>
        <IonButton fill="clear" expand="block" onClick={() => history.push('/login')}>
          Already have an account? Log In
        </IonButton>
        <IonButton fill="clear" size="small" onClick={() => history.push('/forgot-password')}>Forgot Password?</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
