import React from 'react'
import './Career.css'
function career(props) {
  return (<>
  <div class="container11 .col-xs-6 .col-sm-3">
                <div class="card">
                    <div class="imgbx">
                        <img src={props.logo} alt=""/>
                    </div>
                    <div class="content">
                        <h2>{props.CareerTitle}</h2>
                        <p>{props.CareerDec}</p>
                    </div>
                </div>
            </div></>
  )
}

export default career