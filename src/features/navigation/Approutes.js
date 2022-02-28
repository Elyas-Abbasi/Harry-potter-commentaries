import {LivresList} from "../livres/LivresList";
import {Routes,Route} from "react-router-dom";
import FavoriteComponent from "../favorites/FavoriteComponent";
import DetailLivreComponent from "../detailLivre/DetailLivreComponent";


const Approutes = () => {
    return(
        <Routes>
            <Route path={"/livres"} element={<LivresList />} />
            <Route path={"/favorites"} element={<FavoriteComponent />} />
            <Route path={"/*"} element={<LivresList />} />
            <Route path={"/livre"} element={<DetailLivreComponent />} />
        </Routes>
    )
}

export default Approutes