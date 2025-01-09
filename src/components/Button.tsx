type ButtonProps = { label: string; onClick: () => void };

const Button = (props: ButtonProps) => {
  return <button onClick={props.onClick}> {props.label} </button>;
};

export default Button;
