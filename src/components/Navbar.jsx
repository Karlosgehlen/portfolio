import { FaGithub } from "react-icons/fa"
import { GrDocumentDownload } from "react-icons/gr";
import curriculo from "../assets/CV Curriculum vitae - Karlos Eduardo.pdf"

const Navbar = () => {
    const handleClick = (id) => {
        switch (id) {
            case "1":
                window.open('https://github.com/Karlosgehlen', '_blank');
                break;
            case "2":
                const downloadUrl = curriculo;

                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', "CV-KarlosEduardo");
        
                document.body.appendChild(link);
                link.click();

                document.body.removeChild(link);
                break;
            default:          
        }
    };  

    return (
        <nav className=" flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
            </div>
            <div className="m-2 flex items-center justify-center gap-4 text-2xl">
                <FaGithub className=" hover:text-green-500 cursor-pointer" onClick={() => handleClick("1")} />
                <GrDocumentDownload  className=" hover:text-green-500 cursor-pointer"  onClick={() => handleClick("2")} />
            </div>
        </nav>
    )
}

export default Navbar