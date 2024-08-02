import { useRef, useState } from "react";

export default function Counter() {
  const [show, setShow] = useState(true);
  const ref = useRef(null);

  return (
    <div>
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        Toggle with setState
      </button>
      <button
        onClick={() => {
          ref.current.remove();
        }}
      >
        Remove from the DOM
      </button>
      {show && <p>Hello world</p>}
      <div ref={ref}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
        deserunt modi doloribus, est, vitae quam inventore nemo beatae ipsa unde
        tempore distinctio sapiente, dolores laboriosam facilis quas qui.
        Repudiandae, aspernatur culpa! Incidunt, perspiciatis. Maiores modi
        maxime exercitationem sequi possimus velit quasi eius explicabo harum
        veniam eum soluta, esse inventore accusamus.
      </div>
    </div>
  );
}
