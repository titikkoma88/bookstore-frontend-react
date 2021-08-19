import { BrowserRouter, Switch, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
