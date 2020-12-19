import { React } from "react";
const User = (props) => {
  console.warn(props.data.name);
  const { data } = props;
  return (
    <>
      <h1> hello data le lo </h1>
      <h3> {data.name} </h3>
      <h3> {data.age} </h3>
    </>
  );
};
export default User;
