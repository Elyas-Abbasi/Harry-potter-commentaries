import React from "react"
import {useDispatch, useSelector} from 'react-redux'
import {deleteLivre, detailLivre, disLikeLivre, favorite, likeLivre, selectFavorites, unfavorite} from "./LivresSlice"
import {Button, Card, CardContent, Stack, Typography} from "@mui/material";
import {Link} from "react-router-dom"
import {Delete, DetailsTwoTone, FavoriteBorderTwoTone, ThumbDownTwoTone, ThumbUpTwoTone} from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const LivreCard = (props) => {

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

    const handleDetail = () => {
        dispatch(
            detailLivre({
                id: props.livre.id
            })
        )
    }


    return(
        <Card sx={{marginBottom: 4}} >
            <CardContent>

                {/* nom de la personne qui a laissé une commentaire */}
                <Typography variant="h4" component="div">
                    {props.livre.name}
                </Typography>

                {/* date du commentaire */}
                <p>{props.livre.date}</p>

                {/* le nombre de like sur ce commentaire */}
                <Typography variant="h6" component="div" color="blue">
                    <p>{props.livre.likes}</p>
                </Typography>

                {/* le nombre de dislike sur ce commentaire */}
                <Typography variant="h6" component="div" color="red">
                    <p>{props.livre.dislikes}</p>
                </Typography>

                {/* description de commentaire */}
                <p>{props.livre.description}</p>

                {/* les 5 buttons */}
                <Stack direction="row" spacing={2} justifyContent="center">
                    <Button startIcon={<DetailsTwoTone />} component={Link} to="/livre" variant={"contained"} onClick={handleDetail} >Details</Button>
                    <Button startIcon={props.livre.favorites ? <FavoriteIcon /> : <FavoriteBorderTwoTone /> } variant={"contained"} onClick={handleFavorite}>Ajouter aux favorites</Button>
                    <Button startIcon={<ThumbUpTwoTone />} variant={"contained"} onClick={handleLike}>Like</Button>
                    <Button startIcon={<ThumbDownTwoTone />} variant={"contained"} onClick={handleDisLike}>Dislike</Button>
                    <Button startIcon={<Delete />} variant={"contained"} onClick={handleDelete}>Delete</Button>
                </Stack>

            </CardContent>
        </Card>
    )
}

export default LivreCard