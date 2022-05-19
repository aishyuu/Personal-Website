import './index.css'
import Introduction from '../../Components/Introduction'
import HomeInfo from '../../Components/HomeInfo'
import { motion } from 'framer-motion'

export default function Home({darkMode}) {
    return(
        <motion.div
            animate={{opacity: 1, y:0}}
            exit={{opacity: 0, y:"100%"}}
            transition={{duration: 1}}>
            <div>
                <Introduction darkMode={darkMode}/>
                <HomeInfo darkMode={darkMode} />
            </div>
        </motion.div>
        
    )
}