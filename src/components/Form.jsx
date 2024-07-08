import { useState } from "react";

export default function Form() {
  const [input, setInput] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === "dhaka") {
          resolve();
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 3000);
    });
  }

  async function handleFormSubmit(e) {
    e.preventDefault();
    setStatus("submitting");

    try {
      await submitForm(input);
      setStatus("success");
    } catch (err) {
      setStatus("typing");
      setError(err.message);
    }
  }

  if (status === "success")
    return (
      <>
        <h1>Thats right!</h1>
      </>
    );
  return (
    <>
      <h2>City quiz</h2>
      <p>What city is located on two continents?</p>

      <form onSubmit={handleFormSubmit}>
        <textarea
          value={input}
          onChange={(e) => {
            setError(null);
            setInput(e.target.value);
          }}
          disabled={status === "submitting"}
        ></textarea>
        <br />
        <button disabled={input === "" || status === "submitting"}>
          {/* onClick={() => handleUpdate(input)} */}
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {error && <p className="Error">{error}</p>}
      </form>
    </>
  );
}
