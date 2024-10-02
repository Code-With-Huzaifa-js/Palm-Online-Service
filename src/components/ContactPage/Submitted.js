import "./Submitted.css";


function Submitted(props){
    return (
        <>
          <div style={props.pop} className="Pop">

              <div className="popBody">

                 <i class="fa-solid fa-check"></i>

                 <h1>Your form has been Submitted</h1>

                 <h3>Thank You</h3>

                 <div className="center">
                  <button onClick={props.goback} className="btn1">GO BACK</button>
                 </div>

              </div>

          </div>
        </>
    )
};

export default Submitted;

