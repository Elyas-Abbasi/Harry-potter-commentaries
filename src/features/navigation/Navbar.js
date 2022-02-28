import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import {LocalMovies, Favorite} from "@mui/icons-material"
import {Link} from "react-router-dom"


const Navbar = () => {
    return(
        <Paper sx={{position: "fixed", bottom: 100, left: 0, right: 0}} elevation={4}>
            <BottomNavigation
                showLabels
            >
                <BottomNavigationAction component={Link} to="/livres" label="Books" icon={<LocalMovies />} />
                <BottomNavigationAction component={Link} to="/favorites" label="Favorites" icon={<Favorite />} />
            </BottomNavigation>
        </Paper>
    )
}

export default Navbar