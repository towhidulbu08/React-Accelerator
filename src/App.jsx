import Form from "./components/Form";
import "./styles.css";

const statuses = ["empty", "typing", "submitting", "success", "error"];

function App() {
  return (
    <div>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>
      {statuses.map((state) => (
        <Form key={state} status={state} />
      ))}
    </div>
  );
}

export default App;
