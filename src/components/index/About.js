import React from 'react'
import './About.css'
function About(props) {
    return (<>
        <div className="col-12 mt-3">
            <div className={props.Aboutstyle}>
                <div className="card-horizontal">
                    <div className="img-square-wrapper">
                        <img className="aboutimg" src={props.Aboutlogo} alt="Card cap" />
                    </div>
                    <div className="card-body">
                        <h5 className="card-title"><b>{props.AboutTitle}</b></h5>
                        <p className="card-text">{props.Aboutdec}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About