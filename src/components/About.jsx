import { ABOUT_TEXT } from "../../constants"
import { motion } from "framer-motion"
import imagemSobre from "../assets/imagem_sobre.jpeg"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <motion.h2 whileInView={{opacity: 1, y: 0}} initial={{initial: 0, y: -100}} transition={{duration: 0.5}} className="my-10 text-center text-4xl">
                Sobre Mim
            </motion.h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <motion.div whileInView={{opacity: 1, x: 0}} initial={{initial: 0, x: -100}} transition={{duration: 1}} className="flex items-center justify-center">
                        <img src={imagemSobre} alt="" className=" w-3/4 h-auto rounded-xl" />
                    </motion.div>
                </div>
                <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} transition={{ duration: 0.5 }} className="w-full lg:w-1/2">
                    <div className="flex justify-center lg:justify-start">
                        <p className="my-2 max-w-xl py-20 font-light tracking-tighter">
                            {ABOUT_TEXT}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default About