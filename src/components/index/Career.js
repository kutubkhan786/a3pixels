import React from 'react'
import './Career.css'
function career(props) {
  return (<>
  <div class="container11 .col-xs-6 .col-sm-3">
                <div class="card">
                    <div class="imgbx">
                        <div class="row2">
                        <img src={props.logo} alt=""/>
                        <h5>{props.CareerTitle}</h5>
                        </div>
                    </div>
                    <div class="content">
                        <p>{props.CareerDec}</p>
                    </div>
                </div>
            </div></>
  )
}

export default career