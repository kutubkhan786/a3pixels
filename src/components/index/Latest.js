import React from 'react'
import './latest.css'
function Latest(props) {
  return (<>
  <div className="container11 .col-xs-6 .col-sm-3">
                <div className="card">
                    <div className="imgbx">
                        <div className="row2">
                        <img src={props.logo} alt=""/>
                        <h5>{props.CareerTitle}</h5>
                        </div>
                    </div>
                    <div className="content">
                        <p>{props.CareerDec}</p>
                    </div>
                </div>
            </div></>
  )
}

export default Latest