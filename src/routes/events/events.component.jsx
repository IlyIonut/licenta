import EventImg from "../../assets/demoday2023.png"
import { Image, Line, Container  } from "./events.styled";

const Events = () => {
    return(
        <div className='flex items-center justify-between w-5/6 my-5 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
            <Image className=""  src={EventImg} alt='event'/>
            <Line className="" />
            <Container className="flex flex-col p-5 h-72">
                <h3>Demoday 2023</h3>
                <p>🚀 Anul acesta, DemoDay debutează cu o etapa noua, etapa pe facultăți! 🎓💡
📣 Ai o idee de afacere genială? Ești student pasionat și creativ? Atunci nu rata șansa de a-ți prezenta conceptul printr-o scurta descriere a ideii tale.
🤝 Vei primi îndrumare personalizată de la mentorii și antreprenorii experimentați ai SAS UTCN, care te vor ajuta să transformi ideea ta într-o afacere de succes.
✨ Cei mai inovativi participanți vor urca pe scena evenimentului de vârf - DemoDay2023, în fața investitorilor și experților din industrie.
🌟 Înscrie-te pentru DemoDay, etapa pe facultăți, până pe 31.05.2023!
Join Team 2rsa4bn</p>
            </Container>
        </div>
    )

}

export default Events;