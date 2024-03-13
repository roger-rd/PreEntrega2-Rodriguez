import {Link} from 'react-router-dom'

export default function NotFound() {
    return<>
        <main className="my-auto p-5" id="notfound">
            <div className="text-center py-5">
                <h1 className="display-1">404</h1>
                <h2>File not found</h2>
                <p>La URL solicitada no se encontró en este servidor.  <ins>Eso es todo lo que sabemos</ins>
                </p>
                <Link to="/"> Volver al Home</Link>
            </div>
        </main>
    
    </>
}