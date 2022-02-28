import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import {selectFavorites} from "../livres/LivresSlice";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {deleteLivre, disLikeLivre, favorite, likeLivre, unfavorite} from "../livres/LivresSlice";
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import {
    Delete,
    ThumbDownTwoTone,
    ThumbUpTwoTone,
    FavoriteBorderTwoTone,
} from "@mui/icons-material";

export const DetailLivreCard = (props) => {

    const dispatch = useDispatch()
    const livresFavorites = useSelector(selectFavorites)


    const handleFavorite = () => {
        if(!livresFavorites.map(livre => livre.id === props.livre.id).includes(true)){
            dispatch(
                favorite( {
                    id: props.livre.id
                })
            )
        } else {
            dispatch(
                unfavorite( {
                    id: props.livre.id
                })
            );
        }
    }

    const handleLike = () => {
        dispatch(
            likeLivre( {
                id: props.livre.id
            })
        )
    }

    const handleDisLike = () => {
        dispatch(
            disLikeLivre( {
                id: props.livre.id
            })
        )
    }

    const handleDelete = () => {
        dispatch(
            deleteLivre({
                id: props.livre.id
            })
        )
    }

    return(
        <Card sx={{marginBottom: 4, marginLeft: 20, marginRight: 20, marginTop: 20}}>
            <CardContent>

                {/* nom de la personne qui a laissé une commentaire */}
                <Typography variant="h4" component="div">
                   <h2>Auteur(e) : {props.livre.name}</h2>
                </Typography>

                {/* le nombre de like sur ce commentaire */}
                <Typography component="div" color="blue" sx={{marginTop:5}}>
                    <p>Likes : {props.livre.likes}</p>
                </Typography>

                {/* le nombre de dislike sur ce commentaire */}
                <Typography  component="div" color="red">
                    <p>Dislikes : {props.livre.dislikes}</p>
                </Typography>

                {/* notation et étoiles donnés par les utilisateurs */}
                <Typography textAlign="left" sx={{marginLeft: 10}}>
                    <p> Rating : {props.livre.rating}</p>
                    <p> Star given : {props.livre.stars_given}</p>
                </Typography>

                {/* description de commentaire */}
                <Typography component="div" align="justify" sx={{marginLeft: 10, marginRight: 10}}>
                    <p>Description : {props.livre.description}</p>
                </Typography>

                {/* date du commentaire */}
                <Typography textAlign="left" sx={{marginTop:5, marginLeft: 10}}>
                    <p>Date de commentaire : {props.livre.date}</p>
                </Typography>

                {/* les 4 buttons */}
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button startIcon={props.livre.favorites ? <FavoriteIcon /> : <FavoriteBorderTwoTone /> } variant={"contained"} onClick={handleFavorite}>Ajouter aux favorites</Button>
                    <Button startIcon={<ThumbUpTwoTone />} variant={"contained"} onClick={handleLike}>Like</Button>
                    <Button startIcon={<ThumbDownTwoTone />} variant={"contained"} onClick={handleDisLike}>Dislike</Button>
                    <Button startIcon={<Delete />} variant={"contained"} onClick={handleDelete}>Delete</Button>
                </Stack>

            </CardContent>
        </Card>
    )
}

export default DetailLivreCard