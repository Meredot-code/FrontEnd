import './App.css';
import {createStore} from "redux";
import rootReducer from './store/redusers';
import {Provider} from "react-redux";
import Header from './components/Header';
import {useRoutes} from './routes';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

function App() {
    const routes = useRoutes(true);
    return (
      <Provider store={store}>
        <div className="App">
            <Header/>
            {routes}
        </div>
      </Provider>
    );
}

export default App;
