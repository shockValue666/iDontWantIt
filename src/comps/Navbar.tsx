import { AppBar,Box, Button, Toolbar,Drawer,ListItemButton,ListItemText,List,ListItem,Divider} from "@mui/material";
// import MenuIcon from '@mui/icons-material/Menu';
import {useState,useEffect} from 'react'
import {Link} from "react-router-dom"
import DesktopNavbar from './DesktopNavbar'

// interface Props {
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window?: () => Window;
//   children: React.ReactElement;
// }

// function HideOnScroll(props: Props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     target: window ? window() : undefined,
//   });

//   return (
//     <Slide appear={false} direction="down" in={!trigger}>
//       {children}
//     </Slide>
//   );
// }


const Navbar = () => {


    const [state,setState] = useState({
                mobileView:false,
                drawerOpen: false,
    })
    
    
    const {mobileView,drawerOpen} = state;

    useEffect(()=>{
            const setResponsiveness = () => {
            return window.innerWidth < 900 
                    ? setState((prevState)=>({...prevState,mobileView:true}))
                    : setState((prevState)=>({...prevState,mobileView:false}))
            }
            setResponsiveness()
            window.addEventListener("resize",()=> setResponsiveness())
            return ()=>{
            window.removeEventListener("resize",()=> setResponsiveness())
            }
    },[])

//     const displayDesktop = () => (
//             <HideOnScroll>
//                     <DesktopNavbar/>
//             </HideOnScroll>
//     )

    const displayMobile = () => {
        const handleDrawerOpen = () => setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () => setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return(
            <Toolbar>
                <Button onClick={handleDrawerOpen} style={{textDecoration:"none"}}>
                        {/* <Fab color="primary" aria-label="edit">
                                <MenuIcon />
                        </Fab> */}
                        menu
                </Button>
                <Drawer
                {...{
                anchor: "left",
                open: drawerOpen,
                onClose: handleDrawerClose,
                }}
                >
                    <List>
                        <ListItem disablePadding>
                                <ListItemButton >
                                        <Link to="/" style={{textDecoration:"none", color:"white"}} >
                                                {/* <p>
                                                <ListItemText primary="Home" />
                                                </p> */}
                                                <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                        home
                                                </Button>
                                        </Link>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/roadmap"  style={{textDecoration:"none", color:"white"}}>
                                                {/* <ListItemText primary="Roadmap" /> */}
                                                <Button >roadmap</Button>
                                        </Link>
                                        {/* <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                roadmap
                                        </Button> */}
                                </ListItemButton>
                        </ListItem>
                        {/* <ListItem disablePadding>
                                <ListItemButton>
                                        <ListItemText primary="sth else" />
                                </ListItemButton>
                        </ListItem> */}
                        <ListItem disablePadding component="a" target={"_blank"} href="https://discord.gg/vKaB2B8v">
                                <ListItemButton>
                                        {/* <ListItemText primary="Discord" /> */}
                                        <Button>Discord</Button>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                                <ListItemButton>
                                        {/* <ListItemText primary="Twitter" /> */}
                                        <Button>Twitter</Button>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        {/* <ListItemText primary="Magic Eden" /> */}
                                        <Button>Magic Eden</Button>
                                </ListItemButton>
                        </ListItem>
                        
                    </List>
                    <Divider />
                </Drawer>
            </Toolbar>
        )
    }

    return(
            // <nav>
            //     <Link to="/">Home</Link>
            //     <br />
            //     <Link to="/roadmap">roadmap</Link>
            //     <br />
            // </nav>
            <Box sx={{marginBottom:"80px"}}>
                <AppBar sx={{background:"black"}}>
                        {mobileView ? displayMobile(): (<>
                    <DesktopNavbar/>
            </>)}
                </AppBar>
        </Box>
    )
}

export default Navbar;