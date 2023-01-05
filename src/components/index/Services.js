import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

function services(props) {
    
    return (<>
        <div className="col-lg-3 col-6">
           <Link to={props.linker} >
            <div className='container7'>
                <div className="container_card">
                    <div className="imgbx">
                        <img src={props.logo} alt="" />
                    </div>
                    <p>
                        <p>{props.name1} <br/>{props.name2} <br/></p>
                    </p>
                    
                </div>
            </div>
            </Link>
        </div>
    </>
    );
}

export default services