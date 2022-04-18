import React from "react";
import {Link} from "react-router-dom";
const Footer=()=>{
    return(
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="align-items-center g-0 border-top py-2 row">
                        <div className="text-center text-md-start col-md-6 col-sm-12">
                            <span>© 2022 Edulogy. All Rights Reserved.</span>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <nav className="nav nav-footer justify-content-center justify-content-md-end">
                                <Link className="nav-link active ps-0" to="/">Privacy</Link>
                                <Link className="nav-link" to="/">Terms </Link>
                                <Link className="nav-link" to="/">Feedback</Link>
                                <Link className="nav-link" to="/">Support</Link>
                            </nav>                         </div>
                    </div>
                </div>
            </footer>
        </div>
    )

}

export default Footer;