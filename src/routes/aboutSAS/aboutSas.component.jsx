import Team from "../team/team.component";
import { AboutContainer } from "./aboutSAS.styled";



const AboutSas = () => {
    return(
        <>
        <AboutContainer className='flex items-center justify-between w-5/6 overflow-hidden bg-white dark:bg-dark-500 lg: rounded-2xl shadow-custom-light dark:shadow-custom-dark'>
            <div>
                <h3>Cine sintem și ce facem?</h3>
                <p>Idei sunt multe, dar puține ajung să se materializeze. Fie frica sau necunoştință de cauză, cert e că nu mai vrem să lăsăm visurile să moară. Aşa am apărut noi, să te ajutăm pe tine să îți pui ideea în practică şi, împreună, să schimbăm lumea. Suntem “echipați” cu mentori, voluntari, training-uri şi discuții care să te ajute să scoți antreprenorul din tine! Așadar, ce este SAS UTCN?</p>
                <h1>Societatea Antreprenorială Studențească din Universitatea Tehnică din Cluj-Napoca</h1>
                <p>Contribuim la crearea unui ecosistem de sprijinire, dezvoltare și încurajare a spiritului antreprenorial în rândul studenților și absolvenților Universității Tehnice din Cluj-Napoca, în primii trei ani de la absolvire, în vederea creșterii competitivității și vizibilității instituției de învățământ superior în mediul academic și de afaceri.</p>
                <p>Avem ca scop facilitarea înființării de entități juridice funcționale, în rândul studenților și absolvenților Universității Tehnice din Cluj-Napoca, în primii trei ani de la absolvire.</p>
            </div>
        </AboutContainer>
        <Team/>
        </>
    )
}

export default AboutSas;