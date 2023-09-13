import React from 'react'
import './home.css'

import portTun from '../../assets/port.jpg'
import compSens from '../../assets/compagnedesensibilisation.jpg'
import dechets from '../../assets/dechets.jpg'
import plat from '../../assets/plats.jpg'
import bot from '../../assets/jellyfishbot.jpg'
import plastic from '../../assets/plastic.jpg'
import project from '../../assets/projet.jpg'
import events from '../../assets/events.jpg'




const Home = () => {
  return (
    <article id="home">
    <section className="section">
      <h2 className='sectionTitle'>Les déchets dans les ports tunisiens</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={portTun} alt="Ports tunisiens" />
      <p className='sectionDivPARA'>
        Les déchets. On en a plein les yeux... et le nez ! Dans les ports tunisiens c’est l’un des problèmes majeurs, insolubles même dans l’eau ! Heureusement, des solutions sont en cours.
      </p>
      </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Une campagne de sensibilisation</h2>
     <div className='sectionDiv'>
     <img className='sectionDivIMG'src={compSens} alt="Campagne de sensibilisation" />
      <p className='sectionDivPARA'>
        Une large campagne de sensibilisation au profit des acteurs générateurs de déchets au niveau des ports de pêche est lancée par l’APIP, Agence des Ports et des Installations de Pêche, dans le cadre du projet transfrontalier ARIBiotech.
      </p>
     </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Utiliser les déchets des activités de pêche</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={dechets} alt="Déchets de pêche" />
      <p className='sectionDivPARA'>
        Utiliser les déchets des activités de pêche et les valoriser est la meilleure solution pour minimiser l’impact environnemental. C’est l’un des objectifs du projet ARIBiotech : une solution lucrative et bénéfique pour tous les intervenants.
      </p>
      </div>
      
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Qu'est-ce que ça veut dire pour l'avenir ?</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={plat} alt="Avenir" />
      <p className='sectionDivPARA'>
        Pour commencer, les industriels et les marchés de poisson qui n’attendent que cette solution miracle qui les débarrasserait des tonnes de déchets de nettoyage et de transformation des produits de pêche, pour les recycler et les utiliser dans l’alimentation animale ou les cosmétiques, leur offrant ainsi une seconde vie.
      </p>
      </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>La technologie au service de la propreté des ports</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={bot} alt="Technologie" />
      <p className='sectionDivPARA'>
        Un robot, collecteur de déchets, au niveau des bassins portuaires, conçu par notre groupe d’experts tunisiens, fera le ménage ! Une démonstration est au programme, au port de la Goulette, le 16 août 2023, dans le cadre de la journée de sensibilisation, organisée par l’APIP.
      </p>
      </div>
    
    
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Lutter contre la pollution plastique</h2>
    <div className='sectionDiv'>
    <img className='sectionDivIMG' src={plastic} alt="Pollution plastique" />
      <p className='sectionDivPARA'>
        «La pêche aux déchets plastiques» est également l’un des thèmes de la campagne de sensibilisation pour lutter contre la pollution marine. En rapportant le plastique «pêché», nos marins «sensibilisés» préservent leur activité, source de revenu pour beaucoup de familles tunisiennes dans toutes les régions côtières.
      </p>
    </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Le projet ARIBiotech dans son ensemble</h2>
     <div className='sectionDiv'>
     <img className='sectionDivIMG' src={project} alt="Projet ARIBiotech" />
      <p className='sectionDivPARA'>
        Le projet ARIBiotech ne se limite pas à la gestion des déchets de pêche. Il prévoit également le recyclage des filets des pêcheurs en collaboration avec des associations locales. Cette activité est déjà proposée du côté sicilien.
      </p>
     </div>
     
    </section>

    <section className="section">
      <h2 className='sectionTitle'>Événements de sensibilisation</h2>
      <div className='sectionDiv'>
      <img className='sectionDivIMG' src={events} alt="Événements de sensibilisation" />
      <p className='sectionDivPARA'>
        6 Événements seront organisés dans les ports de pêche de la Goulette, Kélibia, Bizerte, Mahdia, Teboulba et Sfax visant à sensibiliser les pêcheurs, les industriels spécialisés dans la transformation des produits de pêche et les distributeurs, à utiliser les déchets des activités de pêche pour les recycler.
      </p>
      </div>
      
    
    </section>

  </article>
  )
}

export default Home
