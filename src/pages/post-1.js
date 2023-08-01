import {formatISO9075} from "date-fns";
import {Link} from "react-router-dom";

import "../styles/post.scss";

export default function Post1({_id, title,summary,createdAt}) {

    return (
    <div className="post">
        <div className="post-text">
            <Link to={`/post/${_id}`}>
                <h2>{title}</h2>
            </Link>
            <p className="info">
                <time> at {formatISO9075(new Date(createdAt))}</time>
            </p>
            <p className="summary">{summary}</p>
        </div>
    </div>
    )
}