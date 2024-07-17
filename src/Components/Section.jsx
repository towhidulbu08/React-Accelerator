/* eslint-disable react/prop-types */
import LevelContext from "../Contexts/LevelContext";
export default function Section({ level, children }) {
  return (
    <section className="section">
      <LevelContext.Provider value={level}> {children}</LevelContext.Provider>
    </section>
  );
}
