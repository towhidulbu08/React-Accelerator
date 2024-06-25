import Avatar from "./Avatar";
import Info from "./Info";

export default function Profile(props) {
  return (
    <div>
      <Avatar {...props} />
      <Info />
    </div>
  );
}
