/* eslint-disable react/prop-types */
export default function Panel({ title, children, onClick, isActive }) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive ? <p>{children}</p> : <button onClick={onClick}>Show</button>}
    </section>
  );
}
