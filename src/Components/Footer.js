import { Link } from "react-router-dom";

export default function Footer(){
    return (
    <footer className="bg-primary py-4 my-auto">
        <div className="col">

            <Link style={{textDecoration: 'none'}} to="/">
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023</span>
            </Link>
        </div>

        <div className="col">
            <Link style={{textDecoration: 'none'}} to="/">
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023</span>
            </Link>
        </div>
        <div className="col">

            <Link style={{textDecoration: 'none'}} to="/">
                    <span className="mb-3 mb-md-0 text-body-secondary">&copy; 2023</span>
            </Link>
        </div>
    </footer>);
}