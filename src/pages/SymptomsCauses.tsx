import {
  IonPage,
  IonContent,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonText,
} from "@ionic/react";
import { flameOutline } from "ionicons/icons";

const SymptomsCauses: React.FC = () => {
  const symptoms = [
    "Persistent sadness or low mood",
    "Loss of interest in enjoyable activities",
    "Fatigue or low energy",
    "Changes in appetite or weight",
    "Insomnia or excessive sleeping",
    "Difficulty concentrating or making decisions",
    "Feelings of worthlessness or guilt",
    "Thoughts of self-harm or suicide",
  ];

  const causes = [
    "Genetic predisposition or family history",
    "Imbalance in brain chemicals (neurotransmitters)",
    "Chronic stress or trauma",
    "Medical conditions (e.g., thyroid problems, chronic illness)",
    "Substance abuse",
    "Major life events such as loss, divorce, or job stress",
  ];

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Symptoms & Causes</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding" style={{ backgroundColor: "#b0d2ff" }}>
        <div style={styles.card}>
          <h2 style={styles.header}>Symptoms and Causes of Depression</h2>

          <IonText color="medium">
            <p style={styles.text}>
              Depression is a complex mental health disorder with various
              symptoms and potential causes. Here are some common ones:
            </p>

            <h3 style={styles.subheader}>Common Symptoms:</h3>
            <ul style={styles.list}>
              {symptoms.map((item, index) => (
                <li key={index} style={styles.item}>
                  {item}
                </li>
              ))}
            </ul>

            <h3 style={styles.subheader}>Possible Causes:</h3>
            <ul style={styles.list}>
              {causes.map((item, index) => (
                <li key={index} style={styles.item}>
                  {item}
                </li>
              ))}
            </ul>

            <p style={styles.text}>
              Understanding the symptoms and causes is a crucial first step
              toward seeking help and recovery.
            </p>
          </IonText>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SymptomsCauses;

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: 20,
    borderRadius: 12,
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  },
  header: {
    fontSize: "20px",
    fontWeight: 700,
    color: "#1f2937",
    marginBottom: "12px",
  },
  subheader: {
    fontSize: "18px",
    fontWeight: 600,
    color: "#374151",
    marginTop: "16px",
    marginBottom: "8px",
  },
  text: {
    fontSize: "16px",
    lineHeight: "1.6",
    color: "#4b5563",
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "16px",
  },
  item: {
    fontSize: "16px",
    color: "#4b5563",
    marginBottom: "6px",
  },
};
