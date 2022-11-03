import Footer from "./layouts/Footer";
import Header from "./layouts/Header";
import Sidebar from "./layouts/Sidebar";
import { RoutePages } from "./common/routes/routes";

function App() {
  return (
    <div className="App">
      <Header />
      <RoutePages />
      {/* <Sidebar /> */}
      <Footer />
    </div>
  );
}

export default App;
