import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {MainRoutes} from './routes/MainRouter';
import { CartProvider } from './context';



function App() {
  return (
    <CartProvider>
      <div>
        <MainRoutes />
      </div>;
    </CartProvider>
  )

}

export default App;