import React from 'react';

import Only from '../../assets/images/onlyfriends.jpg';
import Weather from '../../assets/images/weather.jpg';
import Notepad from '../../assets/images/notepad.png';
import Crypto from '../../assets/images/crypto.jpg';
import Scheduler from '../../assets/images/scheduler.jpg';
import Party from '../../assets/images/image.png';

function Project() {
    return (
        <div>
<div class="row title">
            <div id="my-work" class="col col-4">
                <h2>Work</h2>
            </div>
            <div class="grid col col-8">
                <div id="onlyfriends" class="card">
                    <img src={Party} class="card-img-top"/>
                    <div class="card-body">
                        <a href="https://stormy-thicket-02132.herokuapp.com/" target="_blank" class="btn col-12 btn-primary">Party_Hearty<br/>
                            MongoDB/Express/React/Node.js</a>
                    </div>
                </div>
                <div class="grid col col-8">
                <div id="onlyfriends" class="card">
                    <img src={Only} class="card-img-top"/>
                    <div class="card-body">
                        <a href="https://only-friendz.herokuapp.com" target="_blank" class="btn col-12 btn-primary">Only_Friends<br/>
                            Node.js/Express/Handlebars</a>
                    </div>
                </div>
                
                <div id="weather" class="card">
                    <img src={Weather} class="card-img-top"/>
                    <div class="card-body">
                        <a href="https://sammcowen.github.io/weather-dashboard/" target= "_blank"class="btn col-12 btn-primary">Weather
                            Dashboard <br/> JS/Jquery/CSS</a>
                    </div>
                </div>

                <div id="notepad" class="card">
                    <img src={Notepad} class="card-img-top"/>
                    <div class="card-body">
                        <a href="https://sammcowen.github.io/NotePad/"target="_blank"
                            class="btn col-12 btn-primary">NotePad<br/>
                            Express.js/JS/CSS</a>
                    </div>
                </div>

                <div id="crypto" class="card">
                    <img src={Crypto} class="card-img-top"/>
                    <div class="card-body">
                        <a href="https://themanwiththeplan-eng.github.io/cryptGo/"target="_blank"
                            class="btn col-12 btn-primary">cryptGo<br/>
                            JS/Jquery/CSS</a>
                    </div>
                </div>
                <div id="workday" class="card">
                    <img src={Scheduler} class="card-img-top"/>
                    <div class="card-body">
                        <a href="https://sammcowen.github.io/work-day-scheduler/" target="_blank" class="btn col-12 btn-primary">Work
                            Day
                            Scheduler<br/>HTML/CSS<br/> JS/Jquery</a>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    );
};

export default Project;