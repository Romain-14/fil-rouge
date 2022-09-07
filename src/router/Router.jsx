import { Routes, Route } from "react-router-dom";
import Home from '../Components/Main/Home';
import Shop from '../Components/Main/Shop';
import Detail from '../Components/Main/Detail';
import Entry from '../Components/Main/Entry/Index';
import Signup from '../Components/Main/Entry/Signup';
import Dashboard from '../Components/Main/Entry/Dashboard';
import Signout from '../Components/Main/Entry/Signout';

function Router() {
    return (
        <Routes>
            <Route index path="/" element={<Home />} />

            {/* nested route/ route imbriquée */}
            {/* permets de retourner un composant enfant tout en gardant le même point d'entrée: ici la route http://localhost:3000/shop retourne le composant <Shop/> avec tous les produits et son composant enfant <Detail/> utilise le même point d'entrée mais définit un nouvel endpoint http://localhost:3000/shop/:id 
            Ce qui permettra d'afficher le composant Detail, sera le composant natif de RRD "<Outlet />" situé dans le composant Shop, 
            */}
            <Route path="shop" element={<Shop />}>
                <Route path=":id" element={<Detail />} />
            </Route>

            <Route path="entry" element={<Entry />}>
                <Route path="signup" element={<Signup />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="signout" element={<Signout />} />
            </Route>


        </Routes>
    );
}

export default Router;
