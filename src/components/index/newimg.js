
import React, { useState, useEffect } from "react";

function Myimg() {
    
    const [navSize, setnavSize] = useState("0vh");
    const listenScrollEvent = () => {
      window.scrollY > 100 ? setnavSize("-20rem") : setnavSize("0");
    };
    useEffect(() => {
      window.addEventListener("scroll", listenScrollEvent);
      return () => {
        window.removeEventListener("scroll", listenScrollEvent);
      };
    }, []);
    return (<>
    <section class="el pt-0 " style={{
          
          marginTop: navSize,
          transition: "all 1s"
        }}>
            <div class="fit-screen" >



                <div class="fit-card h-1000 d-flex align-items-center justify-content-center ">
                    {/* <div class="bg-box"> */}
                    <img src="/img/banner.png" />

                    <p > WE ARE
                        <b>  A3PIXELS  </b>
                        AN E-LEARNING DESIGN AND PRODUCTION HOUSE.
                        <p class="para">We design & develop effective e-learning programs, websites and prints.
                            With us, your project is sure to deliver results.</p></p>
                </div>
            </div>

        </section>
        </>
    )
}

export default Myimg