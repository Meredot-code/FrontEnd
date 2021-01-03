import './App.css';
import Registration from "./components/Registration";
import {createStore} from "redux";
import rootReducer from './store/redusers';
import {Provider} from "react-redux";
import AuthContainer from "./components/AuthContainer";
import StationsConteiner from './components/StationsConteiner';
import Header from './components/Header';
import {useRoutes} from './routes';

const store = createStore(rootReducer);

function App() {
    const routes = useRoutes(true);
    return (
      <Provider store={store}>
        <div className="App">
            <Header/>
            {routes}
            {/*<StationsConteiner/>*/}
          {/*<AuthContainer/>*/}
          {/*<Registration/>*/}
        </div>
      </Provider>
    );
}

export default App;
