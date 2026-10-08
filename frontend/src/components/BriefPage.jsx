import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function BriefPage() {
  const { id } = useParams();
  const [brief, setBrief] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let cancelled = false;

    fetch(`/api/briefe/${id}`)
      .then(res => {
        if (!res.ok) {
          throw new Error("Brief nicht gefunden");
        }
        return res.json();
      })
      .then(data => {
        if (!cancelled) {
          setBrief(data);
          setLoading(false);
        }
      })
      .catch(err => {
        if (!cancelled) {
          setError(err.message);
          setLoading(false);
        }
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  if (loading) {
    return (
      <div className="brief-container">
        <h1>TEST</h1>
        <p>Wenn du das siehst, wird BriefPage gerendert.</p>
        <p>ID: {id}</p>
      </div>
    );
  }

  if (error || !brief) {
    return (
      <div className="brief-container">
        <h1>Fehler</h1>
        <p>{error || "Brief nicht gefunden"}</p>
      </div>
    );
  }

  return (
    <div className="brief-container">
      <h1 className="brief-titel">{brief.titel}</h1>
      <p className="brief-empfaenger">{brief.empfaenger}</p>
      <div className="brief-text">
        {brief.text.split("\n").map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
      <p className="brief-absender">{brief.absender}</p>
      <p className="brief-datum">{brief.datum}</p>
    </div>
  );
}

export default BriefPage;