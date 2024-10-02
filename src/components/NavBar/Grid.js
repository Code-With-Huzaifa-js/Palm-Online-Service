import "./Grid.css"


function Grid(){
    return (
        <>
           <div className="mainGrid">

                <div className="items i1">
                    <div className="pos">
                        <h2 id="a1" className="mar">Timely and Transparent <br/> Communication </h2>
                        <p id="a2" className="mar">Stay updated on your project's progress<br></br> with regular updates. </p>
                        <button className="btn"> LEARN MORE</button>
                    </div>
                </div>
                <div className="items i2">
                    <div className="boost">
                        <h2 id="boost1">Boost Traffic & <br/> Sales</h2>
                        <p id="Turn">Turn viewers into <br/> customers with <br/> impactful video<br/> marketing.</p>
                    </div>
                </div>
                <div className="items i3">
                    <div className="poll">
                        <i class="fa-solid fa-square-poll-vertical"></i>
                        <h2 id="Data">Data-Driven <br/> Insights</h2>
                        <p id="Mark">Filmuix uses data to optimize your videos, ensuring they not only look great but also reach the right people and drive results for your marketing goals.</p>
                    </div>
                </div>
                <div className="items i4"></div>
                <div className="items i5"></div>

           </div>
        </>
    )
}

export default Grid;