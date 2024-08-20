import "./App.css";
//import Example7 from "./components/Example7";
// import Example8 from "./components/Example8";
// import useSomeAPI from "./utils/useSomeAPI";
import Example9 from "./components/Example9";

export default function App() {
  //const [isOn, setIsOn] = useState(false); // example 7
  //const [data, setData] = useState(null); // example 8

  //const data = useSomeAPI();

  return (
    <div>
      {/* example 7 */}
      {/* <p>{isOn ? "On" : "Off"}</p>
      <Example7 onChange={setIsOn} /> */}

      {/* example 8 */}
      {/* <p>{data && data}</p>
      <Example8 data={data} /> */}
      <Example9 />
    </div>
  );
}
