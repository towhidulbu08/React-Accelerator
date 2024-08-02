import { forwardRef } from "react";

const MyInput = function (props, ref) {
  console.log(props);
  return <input {...props} ref={ref} />;
};

const ForwardedMyInput = forwardRef(MyInput); // Here forwardRef is a Higher order component

export default ForwardedMyInput;
