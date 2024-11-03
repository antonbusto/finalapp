// Importa los componentes necesarios de Ionic y React Router
import React from 'react';
import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonImg } from '@ionic/react';
import { Link } from 'react-router-dom';

// Interfaz para las propiedades del componente CartelPelicula
interface PeliculaProps {
  pelicula: {
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  };
}

// Componente que muestra los detalles de una película
const CartelPelicula: React.FC<PeliculaProps> = ({ pelicula }) => {
  const { title, poster_path, overview, id } = pelicula;
  const imageUrl = `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`;

  return (
    <IonCard className="card-pelicula">
      <Link to={`/pelicula/${id}`}>
        <IonImg src={imageUrl} alt={title} />
      </Link>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{overview.slice(0, 100)}...</IonCardContent>
      <Link to={`/pelicula/${id}`}>
        <IonButton expand="block" color="primary">
          {title}
        </IonButton>
      </Link>
    </IonCard>
  );
};

export default CartelPelicula;