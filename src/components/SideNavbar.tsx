import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListSubheader from '@mui/material/ListSubheader';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import CarRentalIcon from '@mui/icons-material/CarRental';
import PostAddIcon from '@mui/icons-material/PostAdd';
import ChatIcon from '@mui/icons-material/Chat';

function SideNavbar() {
    const listItems = [
        { text: "Home", icon: <HomeIcon fontSize="medium" /> },
        { text: "Profil", icon: <PersonIcon fontSize="medium" /> },
        { text: "Fahrzeuge", icon: <CarRentalIcon fontSize="medium" /> },
        { text: "Eintrag anlegen", icon: <PostAddIcon fontSize="medium" /> },
        { text: "Chat", icon: <ChatIcon fontSize="medium" /> }
    ].map((item, index) => (
        <ListItem key={item.text}>
            <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={<Typography variant="body2">{item.text}</Typography>} />
            </ListItemButton>
        </ListItem>
    ));

    return (
        <Box sx={{ display: 'flex' }}>
            <Drawer
                variant="permanent"
                open={true}
                sx={{
                    width: 200, // Adjust width as needed
                    '& .MuiDrawer-paper': {
                        width: 200, // Adjust width as needed
                    }
                }}
            >
                <List subheader={<ListSubheader><Typography variant="subtitle2">Navigationsmenü</Typography></ListSubheader>}>
                    {listItems}
                </List>
            </Drawer>
        </Box>
    );
}

export default SideNavbar;
