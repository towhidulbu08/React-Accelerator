import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Almaty, Kazakhstan</h2>
      <Panel
        onClick={() => setActiveIndex(0)}
        isActive={activeIndex === 0}
        title="About"
      >
        With a population of about 2 million, Almaty is Kazakhstans largest
        city. From 1929 to 1997, it was its capital city.
      </Panel>
      <Panel
        onClick={() => setActiveIndex(1)}
        isActive={activeIndex === 1}
        title="Etymology"
      >
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for
        "apple" and is often translated as "full of apples". In fact, the region
        surrounding Almaty is thought to be the ancestral home of the apple, and
        the wild <i lang="la">Malus sieversii</i> is considered a likely
        candidate for the ancestor of the modern domestic apple.
      </Panel>
    </>
  );
}
