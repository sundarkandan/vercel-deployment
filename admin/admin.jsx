import { Link } from "react-router-dom";
function Admin(){
    return(
        <>
            <div className="row">
                <div className="col Admin-col">
                   <Link to="/Add">
                   <div className="operations">
                        <img width="100px" className="img-top" src="https://cdn.iconscout.com/icon/premium/png-512-thumb/add-product-2489220-2086170.png" alt="" />
                        <p className="card-text">Add Item</p>
                    </div>
                   </Link>
                </div>
                <div className="col Admin-col">
               <Link to="/update">
               <div className="operations">
                        <img width="150px"src="https://www.pngarts.com/files/7/Update-Button-PNG-Pic.png" alt="" />
                        <p className="card-text">Update Stocks</p>
                    </div></Link>
                </div>
                <div className="col Admin-col">
               <Link to="/delete">
               <div className="operations">
                        <img width="80px"src="https://static.vecteezy.com/system/resources/previews/044/448/989/non_2x/round-red-cross-mark-free-png.png" alt="" />
                        <p className="card-text">Delete Item</p>
                    </div></Link>
                </div>
            </div>
        </>
    )
}
export default Admin;