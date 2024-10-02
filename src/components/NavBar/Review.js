import "./Review.css";


function Review(){

    return (
        <>
          <div className="Review">
                <div className="imgBorder">
                    <img alt="/" src="https://filmuix.com/wp-content/uploads/2024/05/Sourav.webp"></img>
                </div>

                <p id="app"> 
                    I have been working with this agency for a couple of months, and I am very pleased with their service. Their work is always on time and highly professional. Each project is delivered in an eye-catching style, and they make changes until I am completely satisfied, with no extra cost and no questions asked. Plus, their rates are more affordable than other agencies in the market. I am truly enjoying working with them.
                </p>

                <div className="RName">
                    <h1 id = "cName">
                        ARON LOEB
                    </h1>
                    <p id="cLoc">CEO, Company</p>
                </div>

                <div className= "Stars">
                    <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star-half-stroke"></i>
                </div>
          </div>
        </>
    )
}

export default Review;