import { ReactComponent as UTCN } from "../../assets/UTCN.svg";
import { ReactComponent as LogoSas } from "../../assets/logoSas.svg"
import {AiFillFacebook, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai'

const ContactUs = () => {
    return(
            <div className='flex flex-col w-auto h-auto my-10 overflow-hidden bg-white sm:w-96 dark:bg-dark-500 rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                <div className="flex items-center justify-center my-5 ml-6">
                   <LogoSas className='w-24 h-12'  />
                   <UTCN className='w-24 h-12 mx-2'  />
                </div>
                <h1 className="flex justify-center my-4 text-3xl font-bold">Contact Us</h1>
                <div className="flex justify-center my-4 text-cyan-600">
                    <a href="https://www.linkedin.com/company/societatea-antreprenorial%C4%83-studen%C8%9Beasc%C4%83-utcn/" target="_blank" rel="noreferrer"><AiFillLinkedin className='mx-5 rounded-full cursor-pointer lg:w-12 lg:h-12 sm:w-4 sm:h-4' aria-label='Linkedin'/></a>
                    <a href="https://www.instagram.com/sasutcn/" target="_blank" rel="noreferrer"><AiFillInstagram className='mx-5 rounded-full cursor-pointer lg:w-12 lg:h-12 sm:w-4 sm:h-4' aria-label='Instagram' /></a>
                    <a href="https://www.facebook.com/sasutcn" target="_blank" rel="noreferrer"><AiFillFacebook className='mx-5 rounded-full cursor-pointer lg:w-12 lg:h-12 sm:w-4 sm:h-4' aria-label='Facebook' /></a>
                </div>
                <div className="flex flex-col items-center mx-7">
                    <div className="flex flex-col items-center mb-2">
                        <h3 className="text-xl font-semibold">Email:</h3>
                        <p className="text-xl ">sas.utcluj@gmail.com</p>
                    </div>
                    <div className="flex flex-col items-center my-2">
                        <h3 className="text-xl font-semibold">Adress:</h3>
                        <p className="text-xl ">Str.George Barițiu Nr.34,</p>
                        <p className="text-xl">Sala 302, Cluj-Napoca</p>
                    </div>
                    <div className="flex flex-col items-center my-2">
                        <h3 className="text-xl font-semibold">Contact:</h3>
                        <p className="text-xl ">Anca Constantinescu Dobra</p>
                    </div>
                    <div className="flex flex-col items-center mt-2 mb-7">
                        <h3 className="text-xl font-semibold">Phone:</h3>
                        <p className="text-xl ">+40 745775271</p>
                    </div>
                    <button
                    className='w-8/12 py-2 text-white rounded-full mb-7 bg-cyan-600 focus:outline-none'
                    onClick={() => window.open('mailto:sas.utcluj@gmail.com')} >
                    Email Us
                    </button>
                </div>
            </div>
    )
}

export default ContactUs;