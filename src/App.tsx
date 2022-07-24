import './App.css';
import { useMemo } from 'react';
// import * as anchor from '@project-serum/anchor';
import { clusterApiUrl } from '@solana/web3.js';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import {
  getPhantomWallet,
  getSlopeWallet,
  getSolflareWallet,
  getSolletWallet,
  getSolletExtensionWallet,
} from '@solana/wallet-adapter-wallets';

import {
  ConnectionProvider,
  WalletProvider,
} from '@solana/wallet-adapter-react';
import { WalletDialogProvider } from '@solana/wallet-adapter-material-ui';

import { ThemeProvider, createTheme } from '@material-ui/core';
import PreAppExport from './comps/PreAppExport';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import RoadMap from './comps/RoadMap';
import About from './comps/About';
import Whitepaper from "./comps/WhitePaper";
import TokenGate from './comps/TokenGate';
// import Navbar from './comps/Navbar';


const theme = createTheme({
  palette: {
    primary:{
      main: "rgba(6,6,6,1)"
    },
    secondary:{
      main: "rgba(6,6,6,1)"
    }
  },
  typography:{
    allVariants:{
      fontFamily: 'Montserrat',
      textTransform:"none",
    }
  }
});


const network = process.env.REACT_APP_SOLANA_NETWORK as WalletAdapterNetwork;

const App = () => {
  const endpoint = useMemo(() => clusterApiUrl(network), []);

  const wallets = useMemo(
    () => [
      getPhantomWallet(),
      getSolflareWallet(),
      getSlopeWallet(),
      getSolletWallet({ network }),
      getSolletExtensionWallet({ network }),
    ],
    [],
  );

  return (
      <ThemeProvider theme={theme}>
        <ConnectionProvider endpoint={endpoint}>
          <WalletProvider wallets={wallets} autoConnect>
            <WalletDialogProvider>
              {/* <CssBaseline/> */}
              <Router>
                <Routes>
                  <Route path="/" element={<PreAppExport/>} />
                  <Route path="/roadmap" element={<RoadMap/>} />
                  <Route path="/about" element={<About/>} />
                  <Route path="/whitepaper" element={<Whitepaper/>} />
                  <Route path="/tokenGate" element={<TokenGate/>} />
                </Routes>
                
              </Router>
              {/* <PreAppExport/> */}
            </WalletDialogProvider>
          </WalletProvider>
        </ConnectionProvider>
      </ThemeProvider>
  );
};

export default App;
