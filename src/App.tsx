import { Provider } from 'react-redux';
import Game from './components/Game';
import store from './redux';

function App() {
  return (
    <Provider store={store}>
      <Game />
    </Provider>
  );
}

export default App;
