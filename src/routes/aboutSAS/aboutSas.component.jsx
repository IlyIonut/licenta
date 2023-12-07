import Team from "../team/team.component";
import { AboutContainer, Title, Card, CardContainer } from "./aboutSAS.styled";
import Events from "../events/events.component";
import {ReactComponent as Info} from '../../assets/info.svg'
import {ReactComponent as Event} from '../../assets/event.svg'
import {ReactComponent as Mentor} from '../../assets/Mentor.svg'
import {ReactComponent as Idea} from '../../assets/ideas.svg'
import Review from "../review/review.component";


const AboutSas = () => {
    return(
        <>
        
        <AboutContainer >
                <Title>Cine suntem și ce facem?</Title>
                    <p className="indent-6">Idei sunt multe, dar puține ajung să se materializeze. Fie frica sau necunoştință de cauză, cert e că nu mai vrem să lăsăm visurile să moară. Aşa am apărut noi, să te ajutăm pe tine să îți pui ideea în practică şi, împreună, să schimbăm lumea. Suntem “echipați” cu mentori, voluntari, training-uri şi discuții care să te ajute să scoți antreprenorul din tine! Așadar, ce este SAS UTCN?</p>
                    <div className="flex flex-col items-center p-5 mt-2 mb-5">
                        <h3 className="text-2xl font-semibold">Societatea Antreprenorială Studențească</h3>
                        <h5 className="text-xl">din Universitatea Tehnică din Cluj-Napoca</h5>
                    </div>
                    <p className="indent-6">Contribuim la crearea unui ecosistem de sprijinire, dezvoltare și încurajare a spiritului antreprenorial în rândul studenților și absolvenților Universității Tehnice din Cluj-Napoca, în primii trei ani de la absolvire, în vederea creșterii competitivității și vizibilității instituției de învățământ superior în mediul academic și de afaceri.
                        Avem ca scop facilitarea înființării de entități juridice funcționale, în rândul studenților și absolvenților Universității Tehnice din Cluj-Napoca, în primii trei ani de la absolvire.</p>
                {/* <Idea className="w-1/4 h-auto my-8 mr-12"/> */}
                
        </AboutContainer>
        
        <h3 className="p-5 text-4xl font-bold">Scop</h3>
        <CardContainer >
            <Card >
                    <Info className="w-16 h-auto mb-3" />
                    <h2 className="my-3 font-semibold">INFORMARE ȘI ORIENTARE</h2>
                    <p className="text-center">Punem la dispoziția studenților materiale necesare realizării planurilor de afaceri şi/sau proiectelor de finanţare. Resursele informaționale cuprind carti, cursuri,softuri pentru realizarea planurilor de afaceri, studii de caz, testimoniale ale antreprenorilor aflati in diferite faze de dezvoltare.</p>
            </Card>
            <Card >
                <Event className="w-16 h-auto mt-8 mb-3" />
                <h2 className="my-6 font-semibold">ORGANIZARE EVENIMENTE</h2>
                <p className="text-center">Vom invita antreprenori de succes din diferite domenii de activitate care își vor împărtăși experientele antreprenoriale cu studenții. Se vor organiza sesiuni de prezentare a ideilor de afaceri/proiectelor de start-up etc., cu scopul selectării unor propuneri spre evaluare și feedback, cât și pentru atragerea de finanțări pentru cele mai bune proiecte.</p>
            </Card>
            <Card>
                    <Mentor className="w-16 h-auto mt-12 mb-7"/>
                    <h2 className="my-6 font-semibold">MENTORAT</h2>
                    <p className="text-center">Organizăm activități de mentorat pentru studenții care vor să înființeze un start-up, încurajând colaborarea mentor - student în vederea consolidării și dezvoltării unor elemente ale competențelor antreprenoriale necesare viitorilor absolvenți. Avem un consilier juridic, un consilier pentru atragere de fonduri de finanțare si un consilier pentru proprietatea intelectuala.</p>
            </Card>
        </CardContainer>
        
        <Team/>
        <h3 className="p-5 mt-5 mb-10 text-4xl font-bold ">Events</h3>
        <Events/>
        <Review/>
        </>
    )
}

export default AboutSas;