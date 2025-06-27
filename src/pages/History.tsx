import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonLabel,
  IonList,
  IonButton,
  IonInput,
  IonIcon,
  IonText,
  IonButtons,
  IonRefresher,
  IonRefresherContent,
  useIonViewWillEnter,
  useIonAlert,
  IonSpinner,
} from "@ionic/react";
import { trashOutline, refreshOutline } from "ionicons/icons";
import { useState } from "react";

interface HistoryEntry {
  date: string;
  score: number;
  result: string;
  recommendation: string;
}

const History: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [searchText, setSearchText] = useState("");
  const [filteredHistory, setFilteredHistory] = useState<HistoryEntry[]>([]);
  const [loading, setLoading] = useState(false);
  const [presentAlert] = useIonAlert();

  const loadHistory = () => {
    const data = localStorage.getItem("phq9_history");
    if (data) {
      const parsed: HistoryEntry[] = JSON.parse(data);
      const sorted = parsed.sort(
        (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
      );
      setHistory(sorted);
      setFilteredHistory(applySearchFilter(sorted, searchText));
    } else {
      setHistory([]);
      setFilteredHistory([]);
    }
  };

  const applySearchFilter = (list: HistoryEntry[], text: string) => {
    const lower = text.toLowerCase();
    return list.filter(
      (entry) =>
        entry.date.toLowerCase().includes(lower) ||
        entry.score.toString().includes(lower) ||
        entry.result.toLowerCase().includes(lower) ||
        entry.recommendation.toLowerCase().includes(lower)
    );
  };

  const handleSearch = (value: string) => {
    setSearchText(value);
    const filtered = applySearchFilter(history, value);
    setFilteredHistory(filtered);
  };

  const handleDeleteEntry = (index: number) => {
    presentAlert({
      header: "Confirm Delete",
      message: "Are you sure you want to delete this entry?",
      buttons: [
        "Cancel",
        {
          text: "Delete",
          role: "destructive",
          handler: () => {
            const updated = history.filter((_, i) => i !== index);
            localStorage.setItem("phq9_history", JSON.stringify(updated));
            setHistory(updated);
            setFilteredHistory(applySearchFilter(updated, searchText));
          },
        },
      ],
    });
  };

  const handleDeleteAll = () => {
    presentAlert({
      header: "Delete All Entries",
      message: "Are you sure you want to delete all history?",
      buttons: [
        "Cancel",
        {
          text: "Delete All",
          role: "destructive",
          handler: () => {
            localStorage.removeItem("phq9_history");
            setHistory([]);
            setFilteredHistory([]);
          },
        },
      ],
    });
  };

  const handleRefresh = (e: CustomEvent) => {
    setTimeout(() => {
      loadHistory();
      e.detail.complete();
    }, 1000);
  };

  useIonViewWillEnter(() => {
    setLoading(true);
    setTimeout(() => {
      loadHistory();
      setLoading(false);
    }, 500);
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Assessment History</IonTitle>
          <IonButtons slot="end">
            <IonButton onClick={handleDeleteAll} color="danger">
              <IonIcon icon={trashOutline} slot="icon-only" />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <IonRefresher slot="fixed" onIonRefresh={handleRefresh}>
          <IonRefresherContent />
        </IonRefresher>

        <IonInput
          placeholder="Search history..."
          value={searchText}
          onIonChange={(e) => handleSearch(e.detail.value!)}
          clearInput
        />

        {loading && (
          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <IonSpinner name="crescent" color="danger" />
          </div>
        )}

        {!loading && (
          <IonList>
            {filteredHistory.map((item, index) => (
              <IonItem key={index} lines="full">
                <IonLabel>
                  <p>
                    <strong>Date:</strong> {item.date}
                  </p>
                  <p>
                    <strong>Score:</strong> {item.score}
                  </p>
                  <p>
                    <strong>Result:</strong> {item.result}
                  </p>
                  <p>
                    <strong>Recommendation:</strong> {item.recommendation}
                  </p>
                </IonLabel>
                <IonButton
                  fill="clear"
                  slot="end"
                  color="danger"
                  onClick={() => handleDeleteEntry(index)}
                >
                  <IonIcon icon={trashOutline} />
                </IonButton>
              </IonItem>
            ))}
          </IonList>
        )}
      </IonContent>
    </IonPage>
  );
};

export default History;
