import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonText,
  IonBackButton,
  IonButtons,
} from "@ionic/react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import questions from "../data/questions";
import { saveResult } from '../services/result.service';

const scores = [0, 1, 2, 3];
const labels = [
  "Not at all",
  "Several days",
  "More than half the days",
  "Nearly every day",
];

const Questionnaire: React.FC = () => {
  const history = useHistory();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<number[]>([]);

  const handleAnswer = async (score: number) => {
    const nextResponses = [...responses, score];

    if (currentQuestion < questions.length - 1) {
      setResponses(nextResponses);
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const totalScore = nextResponses.reduce((a, b) => a + b, 0);
      let result = "Your mental well-being seems stable.";
      let recommendation = "None/Watchful Waiting";
      let severity = "Minimal";

      if (totalScore >= 5 && totalScore <= 9) {
        result = "You have a Mild depression.";
        recommendation = "Follow up/Repeat PHQ-9";
        severity = "Mild";
      } else if (totalScore >= 10 && totalScore <= 14) {
        result = "You have a Moderate depression.";
        recommendation = "Treatment plan, considering counseling, follow-up, and/or pharmacotherapy";
        severity = "Moderate";
      } else if (totalScore >= 15 && totalScore <= 19) {
        result = "You have a Moderately Severe depression.";
        recommendation = "Active treatment with pharmacotherapy and/or psychotherapy";
        severity = "Moderately Severe";
      } else if (totalScore >= 20) {
        result = "You have a Severe depression.";
        recommendation = "Immediate initiation of pharmacotherapy and expedited referral to a mental health specialist";
        severity = "Severe";
      }

      const userId = parseInt(localStorage.getItem('user_id') || '0', 10);
      if (userId) {
        try {
          await saveResult(totalScore, severity, userId);
          console.log("Result saved successfully.");
        } catch (err) {
          console.error("Failed to save result:", err);
        }
      }

      history.push("/result", {
        result,
        recommendation,
        score: totalScore,
        date: new Date().toLocaleString(),
      });
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" />
          </IonButtons>
          <IonTitle>PHQ-9 Questionnaire</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonText color="dark">
          <h2 style={{ textAlign: "center" }}>
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p style={{ textAlign: "center" }}>
            Please answer the following question based on how you’ve felt over
            the past two weeks.
          </p>
        </IonText>

        <IonText>
          <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
            {questions[currentQuestion]}
          </h3>
        </IonText>

        <div style={{ marginTop: "2rem" }}>
          {labels.map((label, index) => (
            <IonButton
              key={index}
              expand="block"
              color="light"
              onClick={() => handleAnswer(scores[index])}
            >
              <IonText color="dark">{label}</IonText>
            </IonButton>
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Questionnaire;
