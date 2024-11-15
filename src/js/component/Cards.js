import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";



const Cards = (
 {image, title, description}) => {
    return (
        <div className="card-group col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card mx-4 my-4">
                <img src={rigoImage} className="card-img-top w-100% rounded-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <div class="card-footer">
                        <button type="button" className="btn btn-primary">Find out more!</button>
                    </div>

                </div>
            </div>
        </div>
        


    )
}



export default Cards;