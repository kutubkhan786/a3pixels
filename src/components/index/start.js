
import './start.css'
import React, { useState, useEffect } from "react";


function Start() {
    const [navSize, setnavSize] = useState("0");
    const listenScrollEvent = () => {
      window.scrollY > 10 ? setnavSize("0") : setnavSize("-60vh");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);

    return (<>

        <div class="col-12 mt-3 head_logo" data-aos="fade-up">
            <div class='logo-gif  d-flex align-items-center justify-content-center'>
            <img src="img/logos/co_logo.gif" style={{
          
          marginTop: navSize,
          transition: "all 0.5s"
        }}
             alt="company logo"></img>
            </div>
        </div>
    </>
    )
}

export default Start