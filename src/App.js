import { AppProvider } from "./context";
import GrocceryForm from "./AddItem";
import GrocceryList from "./GrocceryList";

function App() {
  return (
    <AppProvider>
      <div className="App">
        <header>Groccery List</header>
        <GrocceryForm />
        <GrocceryList />
      </div>
    </AppProvider>
  );
}

export default App;
