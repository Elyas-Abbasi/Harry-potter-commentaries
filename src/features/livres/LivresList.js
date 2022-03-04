import {useDispatch, useSelector} from "react-redux"
import React, {useEffect} from "react"
import {LivreCard} from "./LivreCard"
import {fetchLivresAsync, selectorPending, selectCommentPerPage} from "./LivresSlice"
import {PaginationBasic} from "../Page/PaginationBasic";
import {Typography} from "@mui/material";

export const LivresList = () => {

    const livres = useSelector(selectCommentPerPage(1))
    const dispatch = useDispatch()
    const pending = useSelector(selectorPending)

    //effect
    useEffect( () => {
            dispatch(fetchLivresAsync())
        }
        , []
    )

    // Livres rendering
    const renderLivres = livres.map(livre => (
        <LivreCard key={livre.id} livre={livre} />
    ))

    return (
        <div>
            {(pending) ?<p> Pending</p> :<>{renderLivres}</>}
            <Typography sx={{marginBottom: 10}} alignItems={"center"} >
                <PaginationBasic />
            </Typography>

        </div>

    )
}
