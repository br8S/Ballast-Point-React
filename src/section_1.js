import React from 'react';
import './section_1.css';

function section_1(){
    return(
        <section className="complete-art">
            <div className="container">
                <div className="complete-art-content">
                    <div className="slogan"> COMPLETE ART</div>
                    <div className="msg-1"> Art inside the can. </div>
                    <div className="msg-2"> Art outside the can. </div>
                    <button type="button" className="explore-new"> EXPLORE NEW PACKAGING </button>
                </div>
            </div>
        </section>
    );
}

export default section_1;