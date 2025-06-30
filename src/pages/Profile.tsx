import {
  IonPage, IonHeader, IonToolbar, IonTitle, IonContent,
  IonButton, IonCard, IonCardContent, IonGrid, IonRow, IonCol,
  IonAvatar, IonItem, IonLabel
} from '@ionic/react';
import { useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface User {
  id: number;
  fullName: string;
  email: string;
  username: string;
  password: string;
}

const Profile: React.FC = () => {
  const history = useHistory();
  const [user, setUser] = useState<User | null>(null);

  

  const handleLogout = () => {
    localStorage.removeItem('user');
    history.push('/home');
  };

  if (!user) return null;

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>My Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow>
            <IonCol sizeMd="4" size="12">
              <IonCard className="ion-text-center">
                <IonCardContent>
                  <IonAvatar style={{ margin: 'auto', width: '100px', height: '100px' }}>
                    <img src="https://cdn-icons-png.flaticon.com/512/147/147144.png" alt="avatar" />
                  </IonAvatar>
                  <h2>{user.fullName}</h2>
                  <p>@{user.username}</p>
                  <IonButton color="primary" className="ion-margin-end">Follow</IonButton>
                  <IonButton fill="outline">Message</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol sizeMd="8" size="12">
              <IonCard>
                <IonCardContent>
                  <IonItem lines="none">
                    <IonLabel><strong>Full Name</strong><br />{user.fullName}</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonLabel><strong>Email</strong><br />{user.email}</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonLabel><strong>Username</strong><br />{user.username}</IonLabel>
                  </IonItem>
                  <IonItem lines="none">
                    <IonLabel><strong>Password</strong><br />••••••••</IonLabel>
                  </IonItem>
                  <IonButton expand="block" className="ion-margin-top">Edit</IonButton>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
        <IonButton expand="block" color="danger" onClick={handleLogout}>Log Out</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
