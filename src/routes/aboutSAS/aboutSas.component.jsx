import Team from "../team/team.component";
import { AboutContainer } from "./aboutSAS.styled";
import Events from "../events/events.component";


const AboutSas = () => {
    return(
        <>
        <h3 className="p-5 my-5 text-4xl font-bold" >Cine suntem și ce facem?</h3>
        <AboutContainer className='flex flex-wrap items-center justify-between w-5/6 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                <p>Idei sunt multe, dar puține ajung să se materializeze. Fie frica sau necunoştință de cauză, cert e că nu mai vrem să lăsăm visurile să moară. Aşa am apărut noi, să te ajutăm pe tine să îți pui ideea în practică şi, împreună, să schimbăm lumea. Suntem “echipați” cu mentori, voluntari, training-uri şi discuții care să te ajute să scoți antreprenorul din tine! Așadar, ce este SAS UTCN?</p>
        </AboutContainer>
        <div className="flex flex-col items-center p-5 my-5">
            <h3 className="text-4xl font-bold">Societatea Antreprenorială Studențească</h3>
            <h5 className="text-xl">din Universitatea Tehnică din Cluj-Napoca</h5>
        </div>
        
        <AboutContainer className='flex flex-wrap items-center justify-between w-5/6 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
                <p>Contribuim la crearea unui ecosistem de sprijinire, dezvoltare și încurajare a spiritului antreprenorial în rândul studenților și absolvenților Universității Tehnice din Cluj-Napoca, în primii trei ani de la absolvire, în vederea creșterii competitivității și vizibilității instituției de învățământ superior în mediul academic și de afaceri.
                    Avem ca scop facilitarea înființării de entități juridice funcționale, în rândul studenților și absolvenților Universității Tehnice din Cluj-Napoca, în primii trei ani de la absolvire.</p>
        </AboutContainer>
        <Team/>
        <h3 className="p-5 text-4xl font-bold">Events</h3>
        <Events/>
        </>
    )
}

export default AboutSas;