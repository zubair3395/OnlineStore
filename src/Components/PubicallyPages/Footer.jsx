import React from 'react'

export default function Footer() {
  return (
    <>
      <hr/>
      <div className="container my-5">
      <div className="row">
        <div className="col-md">
        <a className="navbar-brand fw-bold fs-4" href="/">
         <img src="https://chisnghiax.com/ciseco/static/media/logo.95d47bbac8db6c1e8f997bbf26ca05cf.svg" alt=""/>
          </a>
        </div>
        <div className="col-md">
            <strong>Contact us</strong>
        </div>
        <div className="col-md"><strong>Social Media</strong></div>
        <div className="col-md"><strong>Location</strong></div>
        <div className="col-md"><strong>About us</strong></div>
      </div>
      <div className="row my-5">
        <div className="col-md">
          Our main product are clothes, shoes. There is all collection of clothes and shoes also avaibale
          
        </div>
        <div className="col-md">
            <p>0300000000</p>
            <p>xyz@gmail.com</p>
        </div>
        <div className="col-md">
        <a href="www.facebook.com"><i class="fa fa-facebook-official" aria-hidden="true"></i> Facebook </a>
        <a href="www.youtube.com"><i class="fa fa-youtube-play" aria-hidden="true"></i> YouTube</a>
        <a href="www.twitter.com"><i class="fa fa-twitter" aria-hidden="true"></i> Twitter</a>
        </div>
        <div className="col-md">
            <p>Johar town lahore</p>
        </div>
        <div className="col-md">
            <p>Discussion Forums</p>
        </div>
      </div>
      {/* <div className="row">
       
      <div className="col-md"><a href="www.telegram.com"><i class="fa fa-telegram" aria-hidden="true"></i> Telegram</a></div>
      <div className="col-md"><a href="www.whatsapp.com"><i class="fa fa-whatsapp" aria-hidden="true"></i> Whatsapp</a></div>
      <div className="col-md"><a href="www.email.com"><i class="fa fa-envelope" aria-hidden="true"></i> E-mail</a></div>
      </div> */}
     
      </div>
    </>
  )
}
