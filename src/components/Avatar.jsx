export default function Avatar(props) {
  const { person, size, age } = props;
  return (
    <div>
      <div>
        <h1>{person}</h1>
        <p>{size}</p>
        <p>{age}</p>
      </div>
    </div>
  );
}
