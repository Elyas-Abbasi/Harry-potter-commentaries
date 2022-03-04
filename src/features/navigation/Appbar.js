import {AppBar, Box, Toolbar, Typography} from "@mui/material"

const Appbar = () => {
    return(
        <Box sx={{ flexGrow: 1}}>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{flexGrow: 1}}>
                        Harry Potter and the Sorcerer's Stone Critics
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Appbar