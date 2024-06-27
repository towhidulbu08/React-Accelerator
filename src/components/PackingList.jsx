function Item({ name, isPacked }) {
  let itemContent = "";
  if (isPacked) {
    itemContent = <span>{name + " ✔"}</span>;
  } else {
    itemContent = name;
  }
  return <li className="item">{itemContent}</li>;
}

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={0} name="Photo of Tam" />
      </ul>
    </section>
  );
}
