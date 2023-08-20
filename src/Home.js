import React from "react";
import "./Home.css";
import Typical from "react-typical";

const Home=()=>
{
    return(
        <div className="HomeMain">
            <div className="HomePart1">
                <h3>Welcome to My World</h3>
                <h1 >Hi I'm Karthik</h1>
                <h1>
                    <Typical 
                    loop={Infinity}
                    steps={['Web developer', 1000, 'Full stack  developer', 1000,'Front-end developer',1000,]}
                    />

                    
                </h1>
                <h1><span>Based Indian</span> </h1>
               
                
                
                
            </div>

            <div className="HomePart2">
                <img src="./images/nani.jpg" alt="text"/>

            </div>
            <div id="About" >
                
                  
                    <div className="AboutMain">
                    <div className="AboutPart1">
                        <img src="./images/karthik.jpg" alt="text"/>
                    </div>
                    <div className="AboutPart2" id="AboutPage">
                    <h1>About Me</h1>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    
                     <button><a href="./images/resume.pdf" dowmload="karthik-Resume">Download CV</a></button>
                     <button><a href="#Contactcontent">Hire Me</a></button>
                    </div>
              
                
               </div>
                
            </div>
            <div id="Services">
                <div className="Services0">
                      <h1>my Awesome Services</h1>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br/> Lorem Ipsum has been the industry's standard dummy text </p>
                </div>
                <div className="Service1"> 
                    <div className="boxService">
                        <h1>Frond End DeVelopment</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className="boxService">
                        <h1>Back End Development</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                    <div className="boxService">
                        <h1>DSA In java</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
                    </div>
                </div>
            </div>
            <div id="Skillscontent">
                <div>
                    <h1>My Skills</h1>
                </div>
                <div className="Skills"> 
                    <div className="Skillsborder">
                        <figure>
                            <img src="./images/images.png" alt="text"/>
                           
                            <figcaption>HTML</figcaption>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

                        </figure>

                    </div>
                    <div className="Skillsborder">
                        <figure>
                            <img src="./images/images2.png" alt="text"/>
                           
                            <figcaption>CSS</figcaption>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

                        </figure>

                    </div>
                    <div className="Skillsborder">
                        <figure>
                            <img src="./images/images3.png" alt="text"/>
                           
                            <figcaption>JavaScript</figcaption>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

                        </figure>

                    </div>
                    <div className="Skillsborder">
                        <figure>
                            <img src="./images/images4.png" alt="text"/>
                           
                            <figcaption>React Js</figcaption>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

                        </figure>

                    </div>

                </div>
            </div>
            <div id="Contactcontent">
                <div className="contactbody">
                <h1>Hire Me</h1>
                <h3>iam avaiaable for freelance work . connect with Email:<span>karthikreddyindukuri12@gmail.com</span></h3>
                    <h3>contact <span>8374658910</span></h3>
                    <img src="./images/contact" alt="text"/>
                </div>
                <div className="contactMain">
                 <input type="text" placeholder="enter your name" /><br/><br/>
                    <input type="text" placeholder="Write your Email" /><br/><br/>
                    <input type="text" placeholder="write your subject"/><br/><br/>
                    <div className="contacttext">
                    <input type="text" placeholder="Write yout MEseeege" /><br/><br/>
                    </div>
                    <button>Submit</button>

                </div>
            </div>
        </div>
    )
}
export default Home;