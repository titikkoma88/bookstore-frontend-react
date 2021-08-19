import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Beranda from "./components/Beranda";
import Navbar from "./components/Navbar";
import ManajemenBuku from "./components/ManajemenBuku";
import { useState } from 'react';


function App() {
  const [books,setBooks] = useState([
    {_id: 1, judul: "Bumi", pengarang: "Tere Liya", harga: 80000, stok: 7},
    {_id: 2, judul: "New York Hari Ini", pengarang: "Aan Mansyur", harga: 85000, stok: 5},
  ]);
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <Beranda />
          </Route>

          <Route path="/manajemen-buku">
            <ManajemenBuku bookList={books} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
