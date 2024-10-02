import "./reUse.css"

function ReUse(props){

    return (
        <>
          <div className="boxy">

            <div className="cover">
                <i className={props.img}></i>
                <h3>
                    {props.heading}    
                </h3>

                <p>
                   {props.text}
                </p>

                <button className="btn">LEARN MORE!</button>
            </div>

          </div>
        </>
    )
}

export default ReUse;