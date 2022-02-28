import React from "react";
import {useSelector} from "react-redux";
import {selectLivres} from "../livres/LivresSlice";
import {DetailLivreCard} from "./DetailLivreCard";

const DetailLivreComponent = (props) => {

    const livres = useSelector(selectLivres)

    // Livres rendering
    const renderDetailDeLivre = livres.map(livre => (
        <DetailLivreCard key={livre.id} livre={livre} />

    ))

    return(
        <div>
            {renderDetailDeLivre}
        </div>

    )
}

export default DetailLivreComponent
