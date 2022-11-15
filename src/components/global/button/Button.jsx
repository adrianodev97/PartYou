import "./button.scss";

const Button = () => {
  const render =
    props.link ?
      (
        <a href={props.link} target="_blank" className={["btn-default", props.classStyle ? props.classStyle : ""].join(" ")} rel="noreferrer">
          {props.children}
        </a>
      )
      :
      (
        <button type="button" className={["btn-default", props.classStyle ? props.classStyle : ""].join(" ")} onClick={props.onclick}>
          {props.children}
        </button>
      )

  return (
    <>
      {render}
    </>
  )
}

export default Button
