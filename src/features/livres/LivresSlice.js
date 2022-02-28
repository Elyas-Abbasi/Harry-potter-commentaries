import {livres$} from "../../data/hp_critics.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit"

const initialState = {
    livres : [],
    fav : []
}

export const fetchLivresAsync = createAsyncThunk(
    'livres/fetch',
    async () => {
        return await livres$;
    }
);

export const livresSlice = createSlice({
    name: 'livre',
    initialState,

    // Actions
    reducers: {
        deleteLivre(state, action) {
            // copie locale du state
            const livres = state.livres
            // Index de livre à supprimer
            const livreToDelete = state.livres.findIndex(i => i.id === action.payload.id)
            // splice de livre à supprimer
            livres.splice(livreToDelete, 1)
            // nouveau state
            state.livres = livres
        },
        likeLivre(state, action) {
            // copie locale du state
            const livres = state.livres
            // Index de livre à liker
            const livreToLike = state.livres.findIndex(i => i.id === action.payload.id)
            // on ajoute "+1" au numbre de likes
            livres[livreToLike].likes +=1
            state.livres = livres
        },
        disLikeLivre(state, action) {
            // copie locale du state
            const livres = state.livres
            // Index de livre à disliker
            const livreToDisLike = state.livres.findIndex(i => i.id === action.payload.id)
            // on ajoute "-1" au numbre de likes
            livres[livreToDisLike].dislikes +=1
            state.livres = livres
        },
        favorite(state, action) {
            // copie locale du state
            const fav = state.fav
            const livres = state.livres
            // Index de livre à ajouter au favorits
            const livreToFavorits = state.livres.findIndex(i => i.id === action.payload.id)
            // on push dans le tableau fav
            fav.push(livres[livreToFavorits])
            // on modifie la valeur de favorites
            livres[livreToFavorits].favorites = true
            state.fav = fav
        },
        unfavorite(state, action) {
            // copie locale du state
            const fav = state.fav
            const livres = state.livres
            // Index de livre à enlever de favorits
            const livreToFavorits = state.livres.findIndex(i => i.id === action.payload.id)
            // on modifie la valeur de favorites
            livres[livreToFavorits].favorites = false
            // on filtre
            state.fav = fav.filter(livre => livre.id !== action.payload.id)
        },
        detailLivre(state, action){
            // copie locale du state
            const livres = state.livres
            // Index de livre auquel on souhait afficher ses détails
            const livreToDetail = state.livres.findIndex(livre => livre.id === action.payload.id)
            // on réinitialise le tableau
            state.livres = [];
            // on push dans le tableau
            state.livres.push(livres[livreToDetail])
        }
    },

    // ExtraReducers (Asynchrone)
    extraReducers: (builder) => {
        builder
            .addCase(fetchLivresAsync.pending, (state) => {
                console.log("Loading livres...");
                state.pending = true
            })
            .addCase(fetchLivresAsync.fulfilled, (state, action) => {
                state.pending = false
                state.livres = action.payload;
            });
    },

})
// livres selector
export const selectLivres = (state) => {
    return state.livres.livres
}

// fav selector
export const selectFavorites = (state) => {
    return state.livres.fav
}

// comment per page selector
export const selectCommentPerPage = (pageNumber) => (state) => {

    let itemParPage = 5;
    let listEnd = pageNumber * itemParPage;
    let listStart = listEnd - itemParPage;
    return state.livres.livres.slice(listStart, listEnd);
}

// page number selector
export const selectPageNumber = (state) => {
    console.log( state.livres.livres.length / 5)
    return state.livres.livres.length / 5.0;
}

// pending selector
export const selectorPending = (state) => state.livres.pending

// Default export
export default livresSlice.reducer;
export let { deleteLivre, likeLivre, disLikeLivre, favorite, detailLivre, unfavorite } = livresSlice.actions
