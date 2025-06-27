import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonImg,
  IonButton,
  IonText,
} from "@ionic/react";
import { useHistory } from "react-router-dom";

const LearnMore: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Learn More</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding" scrollY={true}>
        <IonImg
          src="/images/Banner.jpg"
          alt="Banner"
          style={{ borderRadius: "12px", marginBottom: "20px" }}
        />

        {/* Symptoms and Causes */}
        <IonCard button onClick={() => history.push("/symptoms-causes")}>
          <IonCardHeader>
            <IonCardSubtitle>Symptoms and Causes</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              Common symptoms include persistent sadness, loss of interest,
              fatigue, changes in sleep or appetite, and difficulty
              concentrating. Causes can be biological, psychological, or
              environmental, such as genetics, trauma, or chronic stress.
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* Early Detection */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Importance of Early Detection</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              Early detection and intervention are crucial to prevent
              depression from becoming more severe. It helps individuals seek
              appropriate support and treatment, improving their quality of life
              and overall well-being.
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* Where to Get Help */}
        <IonCard button onClick={() => history.push("/resources")}>
          <IonCardHeader>
            <IonCardSubtitle>Where to Get Help</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              If you're feeling overwhelmed, it's okay to ask for help. Tap here
              to view a list of mental health hotlines and support services
              available to you.
              <br />
              <br />
              Click here to get help.
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* About PHQ-9 */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>About the PHQ-9</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <IonText>
              The PHQ-9 (Patient Health Questionnaire-9) is a self-administered
              tool used to screen, diagnose, monitor, and measure the severity
              of depression. It is a reliable measure based on the diagnostic
              criteria for major depressive disorder in the DSM-IV.
            </IonText>
          </IonCardContent>
        </IonCard>

        {/* Scoring Guide */}
        <IonCard>
          <IonCardHeader>
            <IonCardSubtitle>Scoring Guide</IonCardSubtitle>
          </IonCardHeader>
          <IonCardContent>
            <ul>
              {[
                "0–4: Minimal or no depression",
                "5–9: Mild depression",
                "10–14: Moderate depression",
                "15–19: Moderately severe depression",
                "20–27: Severe depression",
              ].map((item, index) => (
                <li key={index}>
                  <IonText>{item}</IonText>
                </li>
              ))}
            </ul>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default LearnMore;
