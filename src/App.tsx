import "./App.css";
import Filters from "./components/filters";
import List from "./components/list";

function App() {
  return (
    <main>
      <h1>Plane Tickets</h1>
      <div className="container">
        <Filters />
        <List />
      </div>
    </main>
  );
}

export default App;
