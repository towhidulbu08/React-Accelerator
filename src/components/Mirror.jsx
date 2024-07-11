export default function Mirror({ messageColor }) {
  const color = messageColor;
  return (
    <div>
      <div style={{ color }}>Hello</div>
      <br />
      <button>Change Color</button>
    </div>
  );
}
