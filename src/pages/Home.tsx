import {
  IonPage,
  IonContent,
  IonText,
  IonButton,
  IonImg,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent className="ion-padding" style={styles.container}>
        <IonText color="dark">
          <h1 style={styles.title}>E-DEPCHECK PHQ-9 DEPRESSION ASSESSMENT</h1>
          <p style={styles.subtitle}>Your mental wellness companion.</p>
        </IonText>

        <IonImg
          src="/images/Mentalhealth.png"
          style={styles.image}
        />

        <IonButton
          expand="block"
          color="primary"
          onClick={() => history.push("/assessment")}
          style={styles.button}
        >
          Take Assessment
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

const styles = {
  container: {
    textAlign: "center" as const,
    backgroundColor: "#b0d2ff",
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "16px",
    marginBottom: "30px",
    color: "#444",
  },
  image: {
    width: "250px",
    height: "250px",
    objectFit: "contain" as const,
    marginBottom: "30px",
  },
  button: {
    width: "80%",
    fontSize: "16px",
    fontWeight: "bold",
  },
};
