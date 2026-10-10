import { Routes, Route, useParams } from "react-router-dom";
import EnvelopeBrief from "./components/EnvelopeBrief.jsx";
import NotFoundPage from "./components/NotFoundPage.jsx";

function BriefRoute() {
  const { id } = useParams();
  return <EnvelopeBrief briefId={id} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/brief/:id" element={<BriefRoute />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}