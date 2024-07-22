import { CONTACT } from "../../constants"
import { motion } from "framer-motion"

function Contact() {
  return (
    <div className="border-b border-neutral-900 pb-20">
        <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{initial: 0, y: -100}} transition={{duration: 0.5}} className="my-10 text-center text-4xl ">Contato</motion.h2>
        <div className="text-center tracking-tighter">
            <motion.p whileInView={{opacity: 1, x: 0}} initial={{opacity: 0, x: -100}} transition={{duration: 1}} className="my-4">Canoas-RS</motion.p>
            <motion.p whileInView={{opacity: 1, x: 0}} initial={{initial: 0, x: 100}} transition={{duration: 1}} className="my-4">(51) 984902425</motion.p>
            <a href="#" className="border-b ">karloseduardo.reis@gmail.com</a>
        </div>
    </div>
  ) 
}

export default Contact