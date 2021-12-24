import React from 'react'

export default function Card({productData}) {
   
    return (
        <div className="card col-md-8 mt-3" >
        <img style={{width:'200px',height:'200px'}} src={productData.image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{productData.title}</h5>
          <p className="card-text">{productData.description}</p>
          <h3><span className="badge bg-secondary">{productData.category}</span></h3>
          <h2 className="float-end text-danger">{productData.price} $</h2>

        </div>
      </div>
    )
}
