import './App.css';
import {createStore} from "redux";
import rootReducer from './store/redusers';
import {Provider} from "react-redux";
import {useRoutes} from './routes';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

function auth(store) {
   if( store.getState() && store.getState().auth.isauth === true){
        return true;
   }
}

function App() {
    const routes = useRoutes(auth(store));
    return (
      <Provider store={store}>
        <div className="App">
            {routes}
        </div>
      </Provider>
    );
}

export default App;
