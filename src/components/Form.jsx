export default function Form({ status }) {
  //
  if (status === "success")
    return (
      <>
        <h1>Thats right!</h1>
        <hr />
      </>
    );
  return (
    <>
      <form>
        <textarea disabled={status === "submitting"}></textarea>
        <br />
        <button disabled={status === "empty" || status === "submitting"}>
          Submit
        </button>
        {status === "submitting" && <p>Loading...</p>}
        {status === "error" && <p className="Error">There was An Error</p>}
      </form>
      <hr />
    </>
  );
}
