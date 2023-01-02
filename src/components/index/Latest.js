import React from 'react'
import './latest.css'
function Latest(props) {
  return (<>
  <div className="container11 m-0 pt-5 pb-5 pl-0 pr-0 col-12 col-xl-3 col-lg-3 col-md-3 col-sm-12 ">
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
            </div>
            </>
  )
}

export default Latest