import React from 'react'

export default function Slider() {
  return (
    <>
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" data-aos="fade-up-right">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row bg-primary bg-opacity-25 slide-row">
          <div className="col-md text-slide">
            <p className="mx-lg-5 fs-2"  data-aos="fade-up-right"> In this season, find the best 🔥</p>
              <h1 className="mx-lg-5  fs-1 fw-bold"  data-aos="fade-up-right">Exclusive collection for everyone</h1>
              <button type="button" className="btn btn-dark rounded-5 mx-lg-5 my-3">Explore Now <i className="bi bi-search"></i></button>
          </div>
          <div className="col-md">  <img src="https://chisnghiax.com/ciseco/static/media/hero-right-2.cb4660d930692248be75.png" className="d-block slide-pix picture-slide" alt="..."/></div>
        </div>
      
      </div>
      <div className="carousel-item">
        <div className="row bg-primary bg-opacity-25 slide-row">
          <div className="col-md text-slide">
            <p className="mx-lg-5 fs-2"  data-aos="fade-up-right"> In this season, find the best </p>
              <h1 className="mx-lg-5 fs-1 fw-bold"  data-aos="fade-up-right">Exclusive collection for everyone</h1>
              <button type="button" className="btn btn-dark rounded-5 mx-lg-5 my-3">Explore Now <i className="bi bi-search"></i></button>
          </div>
          <div className="col-md"><img src="https://chisnghiax.com/ciseco/static/media/hero-right-3.3563ead7c7be2a32eb30.png" className="d-block slide-pix picture-slide picture-slide1" alt="..."/>  </div>
        </div>
     
      </div>
      <div className="carousel-item">
        <div className="row bg-primary bg-opacity-25 slide-row">
          <div className="col-md text-slide">
            <p className="mx-lg-5 fs-2"  data-aos="fade-up-right"> In this season, find the best </p>
              <h1 className="mx-lg-5  fs-1 fw-bold"  data-aos="fade-up-right">Exclusive collection for everyone</h1>
              <button type="button" className="btn btn-dark rounded-5 mx-lg-5 my-3">Explore Now <i className="bi bi-search"></i></button>
          </div>
          <div className="col-md">   <img src="https://chisnghiax.com/ciseco/static/media/hero-right.e5d2705b7e98564ab738.png" className="d-block slide-pix picture-slide picture-slide1" alt="..."/></div>
        </div>
      
      </div>
    </div>
    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
    </>
  )
}
