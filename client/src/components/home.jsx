import Main from "../images/main.png";
import {Link, Routes, Route} from "react-router-dom"
import Product from "./product";
import "./main.css"
function Home(){

    return(
        <>
        <div className="container-fluid">
            <div className="row d-flex flex-sm-column flex-md-row order-sm-2">
                <div className="col col-home">
                    <h1 className="display-5" id="home-t1">The <span className="text-danger"><b>World</b></span> is Your Hands.!</h1><br />
                    <p id="para">Connect, Create, Communicate with Our Phones.</p>
                        <Link to="/product"><button id="home-btn" className="btn btn-danger">Explore Our Products</button></Link>
                        <Routes>
                            <Route path="/product" element={<Product/>}/>
                        </Routes>
                       
                </div>
                <div className="col col-home order-sm-1">
                    <img src={Main} className="home-imgs d-sm-none" width="400px" alt="" />
                </div>
            </div>
        </div>
        </>
    )
}

export default Home;
