import Main from "../images/main.png";
import {Link, Routes, Route} from "react-router-dom"
import Product from "./product";
import "./main.css"
function Home(){

    return(
        <>
        <div className="container-fluid">
            <div className="row d-flex flex-sm-column flex-md-row">
                <div className="col d-flex col-home">
                    <h1 className="display-5" id="home-t1">The <span className="text-danger"><b>World</b></span> is Your Hands.!</h1><br />
                    <p id="para">Connect, Create, Communicate with Our Phones.</p>
                        <Link to="/product"><button id="home-btn" className="btn btn-danger">Explore Our Products</button></Link>
                        <Routes>
                            <Route path="/product" element={<Product/>}/>
                        </Routes>
                       
                </div>
                <div className="col col-home d-none d-md-flex">
                    <img src={Main} className="home-imgs" width="400px" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
