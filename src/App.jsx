export default function App() {
  return (
    <Toolbar
      onPlayMovie={() => alert("Playing")}
      onUploadImage={() => alert("Uploading")}
    ></Toolbar>
  );
}

function Toolbar({ onPlayMovie, onUploadImage }) {
  return (
    <div>
      <Button onSmash={onPlayMovie}>Play Movie</Button>
      <Button onSmash={onUploadImage}>Upload Image</Button>
    </div>
  );
}

function Button({ onSmash, children }) {
  return <button onClick={onSmash}>{children}</button>;
}
