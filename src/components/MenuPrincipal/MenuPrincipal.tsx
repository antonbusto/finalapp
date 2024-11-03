// Importa los componentes necesarios de Ionic y React Router
import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonButtons, IonButton } from '@ionic/react';
import { Link } from 'react-router-dom';

// Componente de menú principal de la aplicación
const MenuPrincipal: React.FC = () => (
  <IonHeader>
    <IonToolbar>
      <IonTitle>Películas App</IonTitle>
      <IonButtons slot="end">
        {/* Enlaces de navegación */}
        <Link to="/home">
          <IonButton color="primary">Inicio</IonButton>
        </Link>
        <Link to="/about">
          <IonButton color="primary">Acerca de</IonButton>
        </Link>
      </IonButtons>
    </IonToolbar>
  </IonHeader>
);

export default MenuPrincipal;