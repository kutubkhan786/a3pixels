import React from 'react';
import './Services.css';

function services(props) {
    return (<>
        <div class="col-xs-6 col-sm-3" onmousewheel='scroll0()'>
            <div class='container7'>
                <div class="container_card">
                    <div class="imgbx">
                        <img src={props.logo} alt="" />
                    </div>
                    <p>
                        <a href="#" class="b">{props.name1} <br/>{props.name2} <br/></a>

                    </p>
                    
                </div>
            </div>
        </div>
    </>
    );
}

export default services