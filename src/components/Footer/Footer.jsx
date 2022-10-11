import React from 'react';
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import Button from "react-bootstrap/Button";
 

const Footer = () =>{ 
    return (
        <div>

<footer className="bg-dark text-center text-white">
<div className="container p-4">
<section className="mb-4">
    <p>
      ¡Gracias por visitar nuestro e-commerce, esperamos que vuelvas pronto y visites nuestras redes sociales para ver otras promociones!
    </p>
  </section>
  <section className="mb-4" >
    <Button href="https://www.instagram.com/instagram/?hl=es-la" btn className="btn-outline-light btn-floating m-1" >
                <BsInstagram className='icon'/>
      </Button>
      <Button href="https://twitter.com/TwitterEspana" btn className="btn-outline-light btn-floating m-1">
                <BsTwitter className='icon'/>
      </Button>
      <Button href="https://www.facebook.com/search/top?q=facebook" btn className="btn-outline-light btn-floating m-1">
                <BsFacebook className='icon'/>
      </Button>
  </section>
  
</div>
<div className="text-center p-3" style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}>
  © 2022 Copyright: Despensa Punto Sur 
</div>

</footer>

        </div>
    )
}
export default Footer;
