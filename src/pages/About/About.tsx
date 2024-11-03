// Importa componentes necesarios
import React from 'react';
import { IonPage, IonContent } from '@ionic/react';
import MenuPrincipal from '../../components/MenuPrincipal/MenuPrincipal';
import './About.css';

const About: React.FC = () => {
  return (
    <IonPage>
      <MenuPrincipal />
      <IonContent>
        <div className="about-content">
          <h1>Acerca de</h1>
		   <h2>Programa modular Diseño y desarrollo Front End </h2>
          <p>Aplicación Ionic React desarrollada por Antonio José Busto Fernández para el módulo<br/> <b>Frameworks Javascript para Front-end y dispositivos móviles</b></p>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default About;
