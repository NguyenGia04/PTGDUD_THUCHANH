import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Pagination = ({currentPage,}) => {
    return (
        <div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item m-1">
                        <button className="page-link m-0 p-0" style={{borderRadius: "5px", border: "none"}}><img src="../img/Button 89.png" alt="" /></button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link" style={{borderRadius: "5px", background: "#F44B87", color:'white'}}>1</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary " style={{borderRadius: "5px"}}>2</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary " style={{borderRadius: "5px"}}>3</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary " style={{borderRadius: "5px"}}>4</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary " style={{borderRadius: "5px"}}>...</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary " style={{borderRadius: "5px"}}>10</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary " style={{borderRadius: "5px"}}>11</button>
                    </li>
                    <li className="page-item m-1">
                        <button className="page-link text-secondary  m-0 p-0" style={{borderRadius: "5px", border: "none"}}><img src="../img/Button 96.png" alt="" /></button>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
export default Pagination;