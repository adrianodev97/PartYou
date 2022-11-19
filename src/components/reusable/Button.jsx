

const Button = (props) => {
  const render =
    props.link ?
      (
        <a href={props.link} 
          className={["btn", 
          props.classStyle ? props.classStyle : "",
          props.small ? "small" : "",
          props.color ? props.color : "", 
          props.full? "full" : ""].join(" ")} rel="noreferrer">
          {props.children}
        </a>
      )
      :
      (
        <button type="button" 
          className={["btn", 
            props.classStyle ? props.classStyle : "",
            props.small ? "small" : "",
            props.color ? props.color : "", 
            props.full? "full" : ""].join(" ")} onClick={props.onclick}>
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
