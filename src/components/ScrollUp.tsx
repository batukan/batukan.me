import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ScrollToTop from "react-scroll-up";

export default function ScrollUpButton() {
    return (
        <ScrollToTop showUnder={160} style={{ zIndex: 1 }}>
            <button
                className="button"
                style={{ color: `#fff`, backgroundColor: `#5a9216` }}
                aria-label="Scroll to top">
                <FontAwesomeIcon icon={faArrowUp} />
            </button>
        </ScrollToTop>
    );
}