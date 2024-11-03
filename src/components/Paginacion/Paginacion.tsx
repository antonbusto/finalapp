// Importa componentes de Ionic, React y los iconos
import React, { useState, useEffect } from 'react';
import {
  IonGrid,
  IonRow,
  IonCol,
  IonButton,
  IonText,
  IonIcon
} from '@ionic/react';
import { arrowBack, arrowForward, playBack, playForward } from 'ionicons/icons';
import CartelPelicula from '../CartelPelicula/CartelPelicula';

// Interfaz de las propiedades del componente Paginacion
interface PaginacionProps {
  peliculas: Array<{
    id: number;
    title: string;
    poster_path: string;
    overview: string;
  }>;
  searchText: string;
}

const Paginacion: React.FC<PaginacionProps> = ({ peliculas, searchText }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 6; // Cantidad de películas por página

  // Filtra las películas según el texto de búsqueda
  const filteredMovies = peliculas.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / moviesPerPage);

  // Define el rango de películas a mostrar en la página actual
  const indexOfLastMovie = currentPage * moviesPerPage;
  const indexOfFirstMovie = indexOfLastMovie - moviesPerPage;
  const currentMovies = filteredMovies.slice(indexOfFirstMovie, indexOfLastMovie);

  // Cambia la página actual según el botón presionado
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  // Reinicia a la primera página cuando cambia el texto de búsqueda
  useEffect(() => {
    setCurrentPage(1);
  }, [searchText]);

  return (
    <IonGrid>
      <IonRow>
        {currentMovies.length > 0 ? (
          currentMovies.map((pelicula) => (
            <IonCol key={pelicula.id} size="12" sizeMd="6" sizeLg="4">
              <CartelPelicula pelicula={pelicula} />
            </IonCol>
          ))
        ) : (
          <IonCol size="12" className="ion-text-center">
            <IonText>Película no encontrada</IonText>
          </IonCol>
        )}
      </IonRow>

      {/* Controles de paginación */}
      {currentMovies.length > 0 && (
        <IonRow>
          <IonCol size="12" className="ion-text-center">
            <IonButton onClick={() => handlePageChange(1)} disabled={currentPage === 1}>
              <IonIcon icon={playBack} />
            </IonButton>
            <IonButton disabled={currentPage <= 1} onClick={() => handlePageChange(currentPage - 1)}>
              <IonIcon icon={arrowBack} />
            </IonButton>
            <IonText>{`Página ${currentPage} de ${totalPages}`}</IonText>
            <IonButton disabled={currentPage >= totalPages} onClick={() => handlePageChange(currentPage + 1)}>
              <IonIcon icon={arrowForward} />
            </IonButton>
            <IonButton onClick={() => handlePageChange(totalPages)} disabled={currentPage === totalPages}>
              <IonIcon icon={playForward} />
            </IonButton>
          </IonCol>
        </IonRow>
      )}
    </IonGrid>
  );
};

export default Paginacion;