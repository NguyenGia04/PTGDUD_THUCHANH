import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const Card = ({ img, name, minutes }) => {
    return (
        <div className="col" >
            <div className="card" style={{ height: "310px" }}>
                <img src={img} alt="" />
                <div className="card-body">
                    <div className="card-title row">
                        <div className="col-9">
                            <h5>{name}</h5>
                        </div>
                        <div className="col-3">
                            <img src="../img/Icon Button 73.png" alt="" className="" />
                        </div>
                    </div>
                    <span className="p-1" style={{ position: "absolute", bottom: "10px", left: "10px", backgroundColor: '#FEF0F5', color: '#F44B87', borderRadius: "10px" }}>
                        {minutes}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Card;