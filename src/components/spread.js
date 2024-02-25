function FormInput() {
  const value = "Music";

  function handleChange() {
    console.log("object");
  }

  return {
    value,
    onChange: handleChange,
  };
}

const result = FormInput();

console.log({ ...result });
