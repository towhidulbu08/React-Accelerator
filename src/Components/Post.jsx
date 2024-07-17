import { useContext } from "react";
import ThemContext from "../Contexts/ThemeContext";
import Heading from "./Heading";
import Section from "./Section";

export default function Post({ title, body }) {
  const theme = useContext(ThemContext);
  return (
    <Section isFancy={true}>
      <Heading>{title}</Heading>
      <p>
        <i>{body}</i>
        <h4>
          <small>{theme}</small>
        </h4>
      </p>
    </Section>
  );
}
