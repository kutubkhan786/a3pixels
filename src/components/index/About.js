import React from 'react'
import './About.css'
function About(props) {
    return (<>
        <div class="col-12 mt-3">
            <div class="card yellow">
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="aboutimg" src={props.Aboutlogo} alt="Card image cap" />
                    </div>
                    <div class="card-body">
                        <h4 class="card-title"><b>{props.AboutTitle}</b></h4>
                        <p class="card-text">{props.Aboutdec}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About