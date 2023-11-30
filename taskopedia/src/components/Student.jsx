export default function Student(props){
    return(
      <div className="container p-4">
          <div className="row border">
            <div className="col-2">
              <img alt="avatar-initials" src={`https://ui-avatars.com/api/?name=${props.fullName}`} className="w-100"></img>  
            </div>
            <div className="col-10">
              {props.fullName} has {props.jobExperience} years experience<br/>
            </div>  
            <div className="col-2">
            {props.children}
          </div>
          </div>
          <br/>
      </div>
    )
  }