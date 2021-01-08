import './App.css';
import {createStore} from "redux";
import rootReducer from './store/redusers';
import {Provider} from "react-redux";
import Header from './components/header/Header';
import {useRoutes} from './routes';
import { composeWithDevTools } from "redux-devtools-extension";

const store = createStore(rootReducer, composeWithDevTools());

console.log("store" + store.getState);

function auth(store) {
   if( store.getState() && store.getState().auth.isAuth === true){
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
