import React from 'react'
import './About.css'
function About(props) {
    return (<>
        <div class="col-12 mt-3">
            <div class={props.Aboutstyle}>
                <div class="card-horizontal">
                    <div class="img-square-wrapper">
                        <img class="aboutimg" src={props.Aboutlogo} alt="Card cap" />
                    </div>
                    <div class="card-body">
                        <h5 class="card-title"><b>{props.AboutTitle}</b></h5>
                        <p class="card-text">{props.Aboutdec}</p>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default About