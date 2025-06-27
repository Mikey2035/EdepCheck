import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButton,
  IonText,
} from "@ionic/react";

const resources = [
  {
    title: "NCMH Crisis Hotline",
    url: "https://ncmh.gov.ph/",
    description: "Call 1553 for 24/7 free and confidential mental health support.",
    phone: "1553",
  },
  {
    title: "MentalHealthPH",
    url: "https://mentalhealthph.org/",
    description: "Advocacy group for mental health awareness and support.",
    phone: "+639178998727",
  },
  {
    title: "Tawag Paglaum - Centro Bisaya",
    url: "https://www.facebook.com/people/Tawag-Paglaum-Centro-Bisaya/100068862624004/",
    description:
      "Tawag Paglaum Centro Bisaya is a helpline, that is available 24/7, for individuals struggling with emotional and suicidal thoughts",
    phone: "+639664679626",
  },
  {
    title: "In Touch: Crisis Line",
    url: "https://in-touch.org/",
    description:
      "Crisis lines for relationship problems, addiction, abuse and other emotional problems.",
    phone: "+639190560709",
  },
];

const Resources: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Resources</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          {resources.map((res, index) => (
            <IonItem key={index} lines="none">
              <IonLabel className="ion-text-wrap">
                <h2>{res.title}</h2>
                <p>{res.description}</p>
                <IonButton
                  expand="block"
                  size="small"
                  color="success"
                  href={`tel:${res.phone}`}
                >
                  Call Now
                </IonButton>
                <IonButton
                  expand="block"
                  size="small"
                  fill="outline"
                  color="primary"
                  href={res.url}
                  target="_blank"
                >
                  Visit Website
                </IonButton>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Resources;
