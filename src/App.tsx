// Importa componentes y funciones de React Router y Ionic
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import MenuPrincipal from './components/MenuPrincipal/MenuPrincipal';
import Home from './pages/Home/Home';
import Pelicula from './pages/Pelicula/Pelicula';
import About from './pages/About/About';

// Importa estilos básicos y opcionales de Ionic
import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

// Configuración opcional para el tema oscuro
import '@ionic/react/css/palettes/dark.system.css';

// Importa variables de tema personalizadas
import './theme/variables.css';

// Inicializa Ionic con la configuración predeterminada
setupIonicReact();

// Componente principal de la aplicación que define las rutas
const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/pelicula/:id" component={Pelicula} />
        <Route exact path="/" render={() => <Redirect to="/home" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;