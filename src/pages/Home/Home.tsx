// Importa los componentes necesarios de Ionic y los componentes personalizados
import React, { useState } from 'react';
import { IonPage, IonContent, IonSearchbar } from '@ionic/react';
import MenuPrincipal from '../../components/MenuPrincipal/MenuPrincipal';
import Paginacion from '../../components/Paginacion/Paginacion';
import moviesData from '../../data/movies.json';

// Página de inicio que contiene el menú, el buscador y el componente de paginación
const Home: React.FC = () => {
  const [searchText, setSearchText] = useState(''); // Estado para el texto de búsqueda

  return (
    <IonPage>
      <MenuPrincipal />
      <IonContent>
        <IonSearchbar
          value={searchText}
          onIonInput={(e) => setSearchText(e.detail.value!)}
          placeholder="Buscar película"
        />
        <Paginacion peliculas={moviesData} searchText={searchText} />
      </IonContent>
    </IonPage>
  );
};

export default Home;