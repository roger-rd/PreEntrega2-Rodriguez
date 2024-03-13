import "../assets/css/contact.css";

export default function Contact() {
  return (
  
  <div className="container car">
    <div className="mb-3">
      <h2 className="d-flex justify-content-center form-h6">Cuentanos, ¿en qué podemos ayudarte?</h2>
      <h6 className="d-flex justify-content-center form-h6">Correo:</h6>
      <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
    </div>
    <div className="mb-3">
      <h6 className="form-h6 d-flex justify-content-center">Descripción</h6>
      <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    </div>
    <button className="btn d-flex justify-content-center">Enviar</button>
  </div>


  )
}
