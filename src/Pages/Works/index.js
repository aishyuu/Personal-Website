import { motion } from 'framer-motion'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Button } from '@chakra-ui/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBlog, faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import featherWeather from '../../Assets/Images/FeatherWeather.png'
import portfolio from '../../Assets/Images/PortfolioSite.png'
import goggles from '../../Assets/Images/Goggles.png'
import restaurant from '../../Assets/Images/Restaurant.png'
import './index.css'

export default function Works( {darkMode}) {
    const data = require("../../Assets/data/works-data.json")

    function imageSelector(number) {
        switch(number) {
            case 1:
                return restaurant;
                
            case 2:
                return goggles;
                
            case 3:
                return portfolio;
                
            default:
                return featherWeather;
        }
    }

    return(
        <motion.div
            initial={{opacity: 0, y: "100%"}}
            animate={{opacity: 1, y:0}}
            exit={{opacity: 0, y:"-100%"}}
            transition={{duration: 0.5}}>
            <div>
                <h1 className='work-title'>Works</h1>
                <Tabs isFitted variant='enclosed' colorScheme="green">
                    <TabList mb='1em'>
                        {data.map((dataPoint) => (
                            <Tab>{dataPoint["Button-Title"]}</Tab>
                        ))}
                    </TabList>
                    <TabPanels>
                            {data.map((dataPoint) => (
                                <TabPanel className="tab-section">
                                    <h1 className="tab-title"> {dataPoint["Modal-Title"]}</h1>
                                    <p className="tab-desc">{dataPoint["Modal-Body"]}</p>
                                    <img className="work-image" src={imageSelector(dataPoint["Number"])} alt="work"/>
                                    <div className="Technologies">
                                        <h2 className="Tech-Title">Technologies</h2>
                                        <h3 className="Tech-List">{dataPoint["Technologies"]}</h3>
                                    </div>
                                    <div className="Libraries-List">
                                        <h2 className="Library-Title">Libraries Used</h2>
                                        <h3 className="Library-List">{dataPoint["Libraries"]}</h3>
                                    </div>
                                    
                                    <div className='button-set'>
                                        <Button isDisabled={dataPoint["Try-out"] === "#"} colorScheme="twitter" className={darkMode === true ? "btn" : " btn light"}>
                                            <a className={dataPoint["Try-out"] === "#" ? "disabled" : ""} href={dataPoint["Try-out"]}><FontAwesomeIcon icon={faGlobe} /> Try it out!</a>
                                        </Button>
                                        <Button colorScheme="twitter" className={darkMode === true ? "btn" : " btn light"}>
                                            <a href={dataPoint["Blog-Link"]}><FontAwesomeIcon icon={faBlog} /> Blog Post</a>
                                        </Button>
                                        <Button colorScheme="twitter" className={darkMode === true ? "btn" : " btn light"}>
                                            <a href={dataPoint["Github-Source"]}><FontAwesomeIcon icon={faGithub} /> Source Code</a>
                                        </Button>
                                    </div>
                                </TabPanel>
                            ))}
                    </TabPanels>
                </Tabs>
            </div>
        </motion.div>        
    )
}