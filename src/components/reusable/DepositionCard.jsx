const DepositionCard = (props) => {
  return (
    <>
      <div className="deposition-card">
        <div className="deposition-content">
          <div className="deposition-info">
            <p>
              {props.text}
            </p>
          </div>
          <div className="deposition-profile">
            <div className="profile-img">
              <img src={props.image} alt="Profile Photo" />
            </div>
            <div className="profile-info">
              <h6>{props.name}</h6>
              <p className="profile-company">{props.company}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DepositionCard