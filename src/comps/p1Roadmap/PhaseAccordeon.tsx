// import { Box,Grid,styled,ThemeProvider,Typography } from '@mui/material'
import { Box,Grid,ThemeProvider } from '@mui/material'
import { makeStyles } from '@mui/styles';
import React,{useEffect,useState} from 'react'
import {theme} from "../styles"
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

// const Responsive = styled(Grid)(({theme})=>({
//     [theme.breakpoints.down("xs")]:{
//         color:"green"
//     },
//     [theme.breakpoints.down("sm")]:{
//         color:"green"
//     }
// }))

const steps = [
  {
    label: 'p∫∫∫∫∫∫∫1',
    description: `whitelist mint, public mint`,
  },
  {
    label: 'p∫∫∫∫∫∫∫2',
    description:
      'staking site, $ds token mint, add pair to a liquidity pool with 15% of the mint income',
  },
  {
    label: 'p∫∫∫∫∫∫∫3',
    description: `depraved DAO formation`,
  },
  {
    label: 'p∫∫∫∫∫∫∫4',
    description: `1st human experiment collection airdropped to hodlers and stakers`,
  },
  {
    label: 'p∫∫∫∫∫∫∫5',
    description: `ds marketplace released, where nfts we be traded using $ds. we will implement a tax that will redistribute fees to holders and to our treasury`,
  },
  {
    label: 'p∫∫∫∫∫∫∫6',
    description: `2nd human experiment, merch release, everything will be bought/sold using solana pay and $ds`,
  },
  
];  

function PhaseAccordeon() {

    // const [w,setW] = useState(window.innerWidth)
    const [,setW] = useState(window.innerWidth)


     const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    useEffect(()=>{
        const handleResize = () =>{
            setW(window.innerWidth)
        }
        window.addEventListener("resize",handleResize)
        return () =>{
            window.removeEventListener("resize",handleResize)
        }
    },[])


    const useStylez = makeStyles({
        root: {
        "& .MuiStepIcon-active": { color: "red" },
        "& .MuiStepIcon-completed": { color: "green" },
        "& .Mui-disabled .MuiStepIcon-root": { color: "cyan" }
        },
        stepIconRoot: {
            color: "pink",
            "&.MuiStepIcon-active": {
            color: "red"
            },
            "&.MuiStepIcon-completed": {
            color: "green"
            }
        },
        stepIconCompleted:{
            color: "yellow"
        },
        stepIconActive:{
            color: "red"
        }
    });

    console.log('GAMW TI POUTANA TI PANAGIA',useStylez);
    const c = useStylez();


  return (
    <ThemeProvider theme={theme}>
        <Grid container spacing={5} style={{height:"90vh", width:"90vw"}}>
            <Grid sx={{border:"2px solid black",background:"#826882"}}  item xs={12} sm={12}>
                    <Box padding="15%">
                        <Typography variant="h3" marginBottom="20%">
                            {/* <Responsive>
                                width: {w}
                            </Responsive>
                            <br /> */}
                            roadmap
                        </Typography>
                        <Box sx={{ maxWidth: 400 }}>
                                    <Stepper activeStep={activeStep} orientation="vertical" className={useStylez().root}>
                                        {/* <Stepper activeStep={activeStep} orientation="vertical" > */}
                                        {steps.map((step, index) => (
                                        <Step key={step.label}>
                                            <StepLabel
                                            // optional={
                                            //     index === 2 ? (
                                            //     <Typography variant="caption">Last step</Typography>
                                            //     ) : null
                                            // }
                                            StepIconProps={{
                                                classes: {
                                                root: c.stepIconRoot,
                                                completed: c.stepIconCompleted,
                                                active: c.stepIconActive,
                                                }
                                            }}
                                            >
                                            <Typography sx={{fontSize:"30px"}}>{step.label}</Typography>
                                            </StepLabel>
                                            <StepContent>
                                            <Typography sx={{fontSize:"20px"}}>{step.description}</Typography>
                                            <Box sx={{ mb: 2 }}>
                                                <div>
                                                <Button
                                                    variant="contained"
                                                    onClick={handleNext}
                                                    style={{ marginTop: 1, marginRight: 1, background:"rgba(201,55,173,255)",color:"white" }}
                                                >
                                                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                                                </Button>
                                                <Button
                                                    disabled={index === 0}
                                                    onClick={handleBack}
                                                    style={{ marginTop: 1, marginRight: 1,marginLeft:"5%", background:"rgba(248,199,140,255)",color:"#cc0e52" }}
                                                >
                                                    Back
                                                </Button>
                                                </div>
                                            </Box>
                                            </StepContent>
                                        </Step>
                                        ))}
                                    </Stepper>
                                    {activeStep === steps.length && (
                                        <Paper square elevation={0} sx={{ p: 3 }}>
                                        {/* <Typography>All steps completed - you&apos;re finished</Typography> */}
                                        <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                                            back to p∫∫∫∫∫∫∫1
                                        </Button>
                                        </Paper>
                                    )}
                                    </Box>
                    </Box>
            </Grid>
            {/* <Grid sx={{border:"2px solid black",display:{xs:"none",sm:"block"}}}  item xs={0} sm={6}>
                    mikri
            </Grid>  */}
        </Grid>
    </ThemeProvider>
  )
}

export default PhaseAccordeon