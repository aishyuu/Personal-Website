import "./index.css"
import Profile from "../../Assets/Images/Profile.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin, faTwitter, faGithub } from "@fortawesome/free-brands-svg-icons"
import { Button } from "@chakra-ui/react"
import "animate.css"

export default function HomeInfo({darkMode}) {
    return(
        <div className= "full-info animate__animated animate__fadeInUp">
            <div className="profile">
                <div className="profile-info">
                    <h2 className="name">Ivan Matias</h2>
                    <h3 className="info">Artist/Developer/Designer</h3>
                </div>
                <img src={Profile} className="pfp" alt="Profile" />
            </div>
            <div className="description">
                <h3 className="hi">Hi!</h3>
                <h3>I'm a self taught developer looking for a role in the tech industry to work with the latest technologies on challenging and diverse projects</h3>
                <h3>I'm quietly confident, naturally curious, and perpetually working on improving my craft, one problem at a time</h3>
                <h3 className="frontend-dev">Developer in front end technologies such as HTML, CSS, Javascript, React, and Git</h3>
                <h3 className="data-analyst">I'm also a google certified data analyst with experience in MySQL, R, and Python</h3>
                <h3>Currently studying Mathematics at the California Polytechnic Institute of Pomona</h3>
                <h3>When not improving my craft, I like to listen to listen to music! Find my playlist <a className="spotify-link" href="https://open.spotify.com/playlist/6ZqKH9pjWwMbfQkV4Qp7oh?si=b436a4e20dae4c39">here!</a></h3> 
            </div>
            <div className="social-links">
                <h2 className="on-web">On the Web</h2>
                <Button colorScheme="linkedin" variant="outline"><a className="social" href="https://www.linkedin.com/in/ivan-matias-8171991ba/"><FontAwesomeIcon icon={faLinkedin} /> Linkedin</a></Button>
                <Button colorScheme="twitter" variant="outline"><a className="social" href="https://twitter.com/BonnyBonBon_"><FontAwesomeIcon icon={faTwitter} /> Twitter</a></Button>
                <Button colorScheme="messenger" variant="outline"><a className="social" href="https://github.com/aishyuu"><FontAwesomeIcon icon={faGithub} /> Github</a></Button>
            </div>
        </div>
    )
}