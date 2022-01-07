import Numbers from "./components/numbers/numbers";
import Operators from "./components/operators/operators";
import Button from "./components/button/Button";

function App() {
  return (
    <div className="App">
      <section className="Numbers">
        <Numbers />
      </section>
      <section className="Operators">
        <Operators />
      </section>
      <div>
        <Button></Button>
      </div>
    </div>
  );
}

export default App;
