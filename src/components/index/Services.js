import React from 'react';
import './Services.css';

function services(props) {
    
    return (<>
        <div className="col-xs-6 col-sm-3">
            <div className='container7'>
                <div className="container_card">
                    <div className="imgbx">
                        <img src={props.logo} alt="" />
                    </div>
                    <p>
                        <a href="#" className="b">{props.name1} <br/>{props.name2} <br/></a>

                    </p>
                    
                </div>
            </div>
        </div>
    </>
    );
}

export default services