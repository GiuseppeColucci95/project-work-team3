//import function
import { Link } from "react-router-dom"

//component exports
export default function NotFound() {
    return (
        <div className="container my-5">
            <div className="row justify-content-center align-items-center my-5">
                <div className="col-12 text-center my-5 ">
                    <h1 className="text-danger">404</h1>
                    <h2 className="text-warning">Page Not Found</h2>
                    <p className="text-muted">The page you are looking for does not exist.</p>
                    <Link to="/" className="btn btn-danger">Back to Home</Link>
                </div>
            </div>
        </div>
    );
}