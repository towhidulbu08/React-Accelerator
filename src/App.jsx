import { Fragment } from "react";
import { getImageUrl } from "./components/utilis.js";
import { people } from "./data";

export default function App() {
  const chemists = people.filter((person) => person.profession === "chemist");
  const listItems = chemists.map((person) => (
    <Fragment key={person.id}>
      <img src={getImageUrl(person)} alt={person.name} />
      <p>
        <b>{person.name}:</b>
        {" " + person.profession + " "}
        known for {person.accomplishment}
      </p>
    </Fragment>
  ));
  console.log(listItems);
  return (
    <div>
      <ul>{listItems}</ul>;
    </div>
  );
}
