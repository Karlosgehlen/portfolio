import { ABOUT_TEXT } from "../../constants"
import { motion } from "framer-motion"
import imagemSobre from "../assets/3334890-desktop-source-code-and-wallpaper-by-coding-and-programming-gratis-foto.jpg"

const About = () => {
    return (
        <div className="border-b border-neutral-900 pb-4">
            <h2 className="my-20 text-center text-4xl ">
                Sobre Mim
                {/* <span className="text-green-500"> Mim</span> */}
            </h2>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-1/2 lg:p-8">
                    <div className="flex items-center justify-center">
                        <img src={imagemSobre} alt="" className="rounded-xl" />
                        {/* imagem sobre */}
                    </div>
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