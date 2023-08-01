import { Link, useNavigate } from "react-router-dom";

import "../styles/header.scss";

export default function Header() {

    const navigate = useNavigate();

    return (
    <main>
        <header className="head">
            <Link 
                to="/" 
                className="logo"
                onClick={() => {navigate("/");}}
            >
                Vidya.news
            </Link>
            <nav>
                <div className="greet-cr">
                    <span>Hello, User! </span>
                    <Link to="/create">Create new post</Link>
                </div>
            </nav>
        </header>
    </main>
    )
}