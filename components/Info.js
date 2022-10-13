import React from "react";

export default function Info() {
    return(
        <div className="info">
            <img className="info__img" src="./assets/profile-png-icon-2.jpg" width="100"/>
            <h1 className="info__title">Sayed Haamid Tore</h1>
            <h2 className="info__subtitle">Front-end Web Developer</h2>
            <a className="info__website-link" href="#">toreshcoding.netlify.app</a>
            <div className="info__btn-container">
                <a href="" className="btn-container__email-btn"><i className="icons fa fa-envelope"></i>Email</a>
                <a href="" className="btn-container__linkedin-btn"><i className="icons fa brands fa-linkedin"></i>LinkedIn</a>
            </div>
        </div>
    )
}