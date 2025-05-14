//import function
import { Link } from "react-router-dom"

//component exports
export default function NotFound() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center align-items-center my-5">
                <div className="col-12 text-center my-5 ">
                    <h1 className="notfound-code">404</h1>
                    <h2 className="notfound-text">Sorry, the page you're trying to find doesn't exist!</h2>
                    <p className="notfound-p">Well, 💩 happens...</p>
                    <Link to="/" className="btn-homepage">Go to homepage</Link>
                </div>
            </div>
        </div>
    );
}