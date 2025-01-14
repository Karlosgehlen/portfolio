import { HERO_CONTENT } from "../../constants"
import perfil from "../assets/perfil.png"
import { motion } from "framer-motion"

const container = (delay) => ({
    hidden: { x: -100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: {duration: 0.5, delay: delay}
    }
})

const Hero = () => {
    return (
        <div className="border-b border-neutral-900 pb-4 lg:mb-35">
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2">
                    <div className="flex flex-col items-center lg:items-start">
                        <motion.h1 variants={container(0)} initial="hidden" animate="visible" className="pb-10 text-7xl lg:mt-16 ">Karlos Reis</motion.h1>
                        <motion.span variants={container(0.5)} initial="hidden" animate="visible" className="bg-gradient-to-r from-green-300 via-green-500 to-green-500
                         bg-clip-text text-4xl tracking-light text-transparent">Desenvolvedor Full Stack</motion.span>
                        <motion.p variants={container(1)} initial="hidden" animate="visible" className="my-2 max-w-xl py-6 font-light tracking-tighter">
                            {HERO_CONTENT}
                        </motion.p>
                        <button type="button" class="bg-green-600 text-white font-bold p-5 rounded-full hover:bg-green-700" onClick={() => {window.open('https://www.linkedin.com/in/karlosgehlen/', '_blank')} }>Vamos nos conectar?</button>
                    </div>
                </div>
                <div className="w-full lg:w-1/2 lg:p-20">
                    <div className="flex justify-center">
                        <motion.img src={perfil} alt="" initial={{x: 100, opacity: 0}} animate={{ x: 0, opacity: 1}} transition={{duration: 1, delay: 1.2}} className="rounded-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero