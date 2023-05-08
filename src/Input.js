export const Input = (props) => {
  return (
    <>
      <input onChange={props.handleChange}></input>
      <button onClick={props.addToList}>add</button>
    </>
  );
};
