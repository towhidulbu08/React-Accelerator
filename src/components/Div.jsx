const Div = () => {
  const divProps = {
    style: { backgroundColor: "blue", padding: "10px" },
  };

  // Using the spread operator to pass properties to a <div> element

  return <div {...divProps}>This is a div element</div>;
};

export default Div;
