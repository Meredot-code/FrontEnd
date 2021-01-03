import './App.css';
import Registration from "./components/Registration";
import {createStore} from "redux";
import rootReducer from './store/redusers';
import {Provider} from "react-redux";
import AuthContainer from "./components/AuthContainer";
import StationsConteiner from './components/StationsConteiner'

const store = createStore(rootReducer);

function App() {
  return (
      <Provider store={store}>
        <div className="App">
            <StationsConteiner/>
          {/*<AuthContainer/>*/}
          {/*<Registration/>*/}
        </div>
      </Provider>
  );
}

export default App;
