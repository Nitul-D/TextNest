import React from 'react'

export default function About(props) {

    // const [myStyle, setMyStyle] = useState ({   If we want to implement dark mode in the about us page, we can use this code.
    //     color : 'black',
    //     backgroundColor : 'white',
    // });

    // const [btnText, setBtnText] = useState ("Enable Dark Mode");

    // const toggleChange = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle ({
    //             color : 'white',
    //             backgroundColor : 'black',
    //             border :'1px solid white',
    //         })
    //         setBtnText ("Enable Light Mode");
    //     }
    //     else {
    //         setMyStyle ({
    //             color : 'black',
    //             backgroundColor : 'white',
    //         })
    //         setBtnText ("Enable Dark Mode");
    //     }
    // }

  return (
    <>
    <div className = "container" style = {{color: props.mode === "light" ? "black" : "white"}}>
        <h2 className ="my-3">About Us</h2>
        <div className="accordion" id="about">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                What is TextNest?
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#about">
                <div className="accordion-body">
                <p>TextNest is a lightweight, web-based utility designed to help you manipulate and manage your text with ease. Whether you need to change text casing, remove extra spaces, or simply count your words, TextNest provides the tools you need in a clean, distraction-free environment.</p>
                </div>
                </div>
            </div>


            <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Why use TextNest?
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#about">
                <div className="accordion-body">
                <p> <strong>Speed: </strong> No heavy downloads or complex menus. Just paste your text and go.</p>
                <p> <strong>Accessibility: </strong> Use it on any device, anywhere, with a responsive interface that supports Dark Mode for those late-night sessions.</p>
                <p> <strong>Simplicity: </strong> We focus on the core utilities that writers, developers, and students use every day.</p>
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Privacy & Tech
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#about">
                <div className="accordion-body">
                <p> <strong>Is my data safe? </strong> </p>
                <p> We value your privacy. <strong> TextNest </strong>processes your text directly in your browser. This means your data never leaves your computer and is not stored on our servers, making it a secure choice for handling sensitive snippets or drafts.</p>
                </div>
                </div>
            </div>

            <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                Contact Us
                </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#about">
                 <div className="accordion-body">
                <p> Have questions or feedback? We’d love to hear from you!</p>
                <p>
                <a href="mailto:nitulchandradutta@gmail.com" class="footer__icon mx-5"><i class='bx bxs-envelope' ></i></a>
                <a href="https://www.facebook.com/nitul.dutta.167" class="footer__icon mx-5"><i class='bx bxl-facebook' ></i></a>
                <a href="https://www.instagram.com/_nit_27" class="footer__icon mx-5"><i class='bx bxl-instagram' ></i></a>
                <a href="https://www.linkedin.com/in/nitul-chandra-dutta" class="footer__icon mx-5"><i class='bx bxl-linkedin' ></i></a>
                <a href="https://github.com/Nitul-D" class="footer__icon mx-5"><i class='bx bxl-github' ></i></a>
                </p>
                </div>
                </div>
            </div>
        </div>
        <p className="footer__copy my-5 mx-5">&#169; NitulChandraDutta. All rights reserved</p>
    </div>
    </>
  );
}
