import Form from "./components/Form";
import SaveButton from "./components/SaveButton";
import StatusBar from "./components/StatusBar";

export default function App() {
  return (
    <div>
      <StatusBar />
      <SaveButton></SaveButton>
      <hr />
      <Form />
      {/* <Div></Div> */}
    </div>
  );
}
