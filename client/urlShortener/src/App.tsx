import "./App.css";
import UrlTable from "./components/urlTable";
import RedirectForm from "./components/RedirectForm";
import ShortenForm from "./components/ShortenForm";

function App() {
  return (
    <div className="main">
      <ShortenForm />
      <RedirectForm />
      <UrlTable />
    </div>
  );
}

export default App;
