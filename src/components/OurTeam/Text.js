import "./Text.css";


function Text(props){
    return (
        <>

            <div className="AccText">

                <h1>{props.head}</h1>
                <p>{props.para}</p>

            </div>
        </>
    )
}

export default Text;