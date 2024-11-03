// Importa componentes de Ionic y otras dependencias
import React from 'react';
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonImg,
  IonText,
  IonButton,
  IonCard,
  IonCardContent
} from "@ionic/react";
import { useParams, useHistory } from "react-router-dom";
import moviesData from "../../data/movies.json";
import MenuPrincipal from '../../components/MenuPrincipal/MenuPrincipal';

// Interfaz para parámetros de ruta
interface RouteParams {
  id: string;
}

// Componente que muestra los detalles de una película seleccionada
const Pelicula: React.FC = () => {
  const { id } = useParams<RouteParams>(); // Obtiene el ID de la película de los parámetros de la URL
  const history = useHistory();
  const pelicula = moviesData.find((movie) => movie.id.toString() === id);

  if (!pelicula) {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Película no encontrada</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <IonText>Lo sentimos, no pudimos encontrar esta película.</IonText>
          <IonButton expand="block" color="primary" onClick={() => history.push('/')}>
            Volver a Inicio
          </IonButton>
        </IonContent>
      </IonPage>
    );
  }

  const { title, poster_path, overview, release_date, vote_average } = pelicula;
  const imageUrl = `https://image.tmdb.org/t/p/w500${poster_path}`;

  return (
    <IonPage>
      <MenuPrincipal />
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>{title}</IonTitle>
        </IonToolbar>
      </IonHeader>	  
      <IonContent className="ion-padding">
        <IonCard>
          <IonImg src={imageUrl} alt={title} />
          <IonCardContent>
            <IonText><h2>{title}</h2></IonText>
            <IonText><p><strong>Estreno:</strong> {release_date}</p></IonText>
            <IonText><p><strong>Calificación:</strong> {vote_average} / 10</p></IonText>
            <IonText><p>{overview}</p></IonText>
          </IonCardContent>
        </IonCard>
        <IonButton expand="block" color="secondary" onClick={() => history.push('/')}>
         Inicio
        </IonButton>		
      </IonContent>
    </IonPage>
  );
};

export default Pelicula;