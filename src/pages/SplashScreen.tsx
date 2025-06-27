import React, { useEffect } from "react";
import {
  IonPage,
  IonContent,
  IonText,
  IonSpinner,
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const SplashScreen: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      const hasSeenIntro = localStorage.getItem("hasSeenIntro");
      const isLoggedIn = localStorage.getItem("user");

      if (!hasSeenIntro) {
        history.replace("/intro");
      } else if (isLoggedIn) {
        history.replace("/home");
      } else {
        history.replace("/login");
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, [history]);

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="ion-padding"
        style={styles.container}
      >
        <IonImg
          src="/images/Brainicon.png"
          style={styles.icon}
        />
        <IonText>
          <h1 style={styles.title}>E-DEPCHECK PHQ-9 DEPRESSION ASSESSMENT</h1>
          <p style={styles.subtitle}>Your mental wellness companion.</p>
        </IonText>

        <IonSpinner name="dots" color="primary" style={styles.spinner} />
      </IonContent>
    </IonPage>
  );
};

export default SplashScreen;

const styles = {
  container: {
    backgroundColor: "#b0d2ff",
    textAlign: "center" as const,
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
  },
  icon: {
    width: "100px",
    height: "100px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#000",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    color: "#777",
    marginBottom: "30px",
  },
  spinner: {
    width: "60px",
    height: "60px",
  },
};
