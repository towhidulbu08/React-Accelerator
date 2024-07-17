/* eslint-disable react/prop-types */
import { useContext } from "react";
import LevelContext from "../Contexts/LevelContext";
import ThemContext from "../Contexts/ThemeContext";
export default function Section({ children, isFancy }) {
  const level = useContext(LevelContext);
  const theme = useContext(ThemContext);
  return (
    <section className={"section " + (isFancy ? "fancy" : "")}>
      <p>My Current Theme Is {theme}</p>
      <ThemContext.Provider value={theme}>
        <LevelContext.Provider value={level + 1}>
          {children}
        </LevelContext.Provider>
      </ThemContext.Provider>
    </section>
  );
}
