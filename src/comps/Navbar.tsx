import { AppBar,Box, Button, Toolbar,Drawer,ListItemButton,List,ListItem,Divider} from "@mui/material";
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
            <Toolbar style={{backgroundColor:"black"}}>
                <Button onClick={handleDrawerOpen} style={{textDecoration:"none",backgroundColor:"pink",fontWeight:"666",fontSize:"20px"}}>
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
                    <List style={{backgroundColor:"black",height:"100%"}}>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/">
                                                <img src="https://somespace.fra1.digitaloceanspaces.com/IMG_50067B2F73AB-2.jpeg" height={"100px"} width="100px" alt="" />
                                        </Link>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton >
                                        <Link to="/" style={{textDecoration:"none", color:"white"}} >
                                                {/* <p>
                                                <ListItemText primary="Home" />
                                                </p> */}
                                                {/* <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info"> */}
                                                        <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,color:"white",background:"rgba(201,55,173,255)"}}>
                                                        {/* variant="contained" size="large" style={{background:"rgba(201,55,173,255)",color:"white",fontWeight:"900"}} */}
                                                        home
                                                </Button>
                                        </Link>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/roadmap"  style={{textDecoration:"none", color:"white"}}>
                                                {/* <ListItemText primary="Roadmap" /> */}
                                                <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,color:"white",background:"rgba(201,55,173,255)"}}>
                                                        roadmap

                                                </Button>
                                        </Link>
                                        {/* <Button variant="contained" size="medium" sx={{fontSize:"18px",margin:3,background:"rgba(66, 245, 236,0.1)"}} color="info">
                                                roadmap
                                        </Button> */}
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/about"  style={{textDecoration:"none", color:"white"}}>
                                                {/* <ListItemText primary="Roadmap" /> */}
                                                <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,color:"white",background:"rgba(201,55,173,255)"}}>
                                                        about

                                                </Button>
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
                        <ListItem disablePadding component="a" target={"_blank"} href="https://discord.gg/8HVUDTtc">
                                <ListItemButton>
                                        {/* <ListItemText primary="Discord" /> */}
                                        <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,background:"rgba(248,199,140,255)",color:"#cc0e52"}}>
                                                Discord

                                        </Button>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding >
                                <ListItemButton>
                                        {/* <ListItemText primary="Twitter" /> */}
                                        <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,background:"rgba(248,199,140,255)",color:"#cc0e52"}}>
                                                Twitter

                                        </Button>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                                <ListItemButton>
                                        {/* <ListItemText primary="Magic Eden" /> */}
                                        <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,background:"rgba(248,199,140,255)",color:"#cc0e52"}}>
                                                Magic Eden
                                        </Button>
                                </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding href="https://somespace.fra1.cdn.digitaloceanspaces.com/dsnew.pdf" component="a" target={"_blank"}>
                                <ListItemButton>
                                        {/* <ListItemText primary="Magic Eden" /> */}
                                        <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,background:"rgba(248,199,140,255)",color:"#cc0e52"}}>
                                                Whitepaper
                                        </Button>
                                </ListItemButton>
                        </ListItem>
                        {/* <ListItem disablePadding>
                                <ListItemButton>
                                        <Link to="/whitepaper"  style={{textDecoration:"none", color:"white"}}>
                                                <Button variant="contained" size="medium" style={{fontSize:"18px",margin:3,color:"white",background:"rgba(201,55,173,255)"}}>
                                                        whitepaper

                                                </Button>
                                        </Link>
                                </ListItemButton>
                        </ListItem> */}
                        
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