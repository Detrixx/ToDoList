export const List = (props) => {
  return (
    <div style={{ backgroundColor: props.complete && "green" }}>
      <div>{props.name}</div>
      <button onClick={() => props.removeFromList(props.id)}> X </button>
      <button onClick={() => props.completeTask(props.id)}> Complete </button>
    </div>
  );
};
