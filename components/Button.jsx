import React from "react";

const Button = ({text,className = ""}) => {
    return (
            <div className="container-button Font2">
                <a href="#" className={`${className} button type--C`}>
                    <div className="button__line"></div>
                    <div className="button__line"></div>
                    <span className={`button__text`}>{text}</span>
                    <div className="button__drow1"></div>
                    <div className="button__drow2"></div>
                </a>
            </div>
    )
}
export default Button