import * as React from "react";
import { Link } from "gatsby";
import * as style from "./Footer.module.scss";

import github from "../../static/assets/social/github.svg";
import linkedin from "../../static/assets/social/linkedin.svg";

export default function Footer() {
    return (
        <div className={style.footerBasic}>
            <hr/>
            <div className={style.social}>
                <a title="GitHub" href="https://github.com/batukan">
                    <img
                        src={github}
                        alt="GitHub"
                    />
                </a>
                <a title="LinkedIn" href="https://www.linkedin.com/in/emrebatukan/">
                    <img
                        src={linkedin}
                        alt="LinkedIn"
                    />
                </a>
            </div>
            <footer>
                <ul className={style["listInline"]}>
                    <li className={style["listInlineItem"]}>
                        <Link to="/">
                            Home
                        </Link>
                    </li>
                    <li className={style["listInlineItem"]}>
                        <Link to="/blog">
                            Blog
                        </Link>
                    </li>
                    <li className={style["listInlineItem"]}>
                        <Link to="/portfolio">
                            Portfolio
                        </Link>
                    </li>
                    <li className={style["listInlineItem"]}>
                        <Link to="/contact">
                            Contact
                        </Link>
                    </li>
                </ul>
            </footer>
        </div>
    );
}
