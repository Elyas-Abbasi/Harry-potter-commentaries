import React from "react";
import {useSelector} from "react-redux";
import {selectFavorites} from "../livres/LivresSlice";
import LivreCard from "../livres/LivreCard";

const FavoriteComponent = (props) => {

    const livresFavorites = useSelector(selectFavorites)

    // Livres rendering
    const renderLivresFavorites = livresFavorites.map(livre => (
        <LivreCard key={livre.id} livre={livre} />

    ))

    return(
        <div>
            {renderLivresFavorites}
        </div>

    )
}

export default FavoriteComponent
