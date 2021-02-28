import "./App.css"
import Sidebar from './Sidebar'
import Chat from './Chat'

function App() {
  return (
    <div className="app">
      <div className="app__body">
        {/* Sidebar Component  */}
        <Sidebar />

        {/* Chat Component  */}
        <Chat />

      </div>
    </div>
  );
}

export default App;
