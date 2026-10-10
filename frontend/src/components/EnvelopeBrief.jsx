import { useState } from "react";
import BriefPage from "./BriefPage.jsx";

export default function EnvelopeBrief({ briefId }) {
  const [isOpening, setIsOpening] = useState(false);
  const [showBrief, setShowBrief] = useState(false);

  function openEnvelope() {
    if (isOpening || showBrief) return;

    setIsOpening(true);

    // Muss zur CSS-Animationsdauer passen
    window.setTimeout(() => {
      setShowBrief(true);
    }, 1100);
  }

  return (
    <>
      {!showBrief && (
        <main className="envelope-scene">
          <button
            className={`envelope-button ${isOpening ? "is-opening" : ""}`}
            type="button"
            onClick={openEnvelope}
            aria-label="Brief öffnen"
            disabled={isOpening}
          >
            <span className="envelope">
              <span className="envelope-back" />

              <span className="envelope-letter">
                <span className="envelope-letter-lines" />
              </span>

              <span className="envelope-front" />
              <span className="envelope-flap" />

              <span className="envelope-seal" aria-hidden="true">
                ✉
              </span>
            </span>

            <span className="envelope-hint">
              {isOpening ? "Brief wird geöffnet …" : "Zum Öffnen anklicken"}
            </span>
          </button>
        </main>
      )}

      {showBrief && (
        <div className="brief-reveal">
          <BriefPage id={briefId} />
        </div>
      )}
    </>
  );
}