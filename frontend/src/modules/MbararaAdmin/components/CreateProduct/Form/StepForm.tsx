import { useContext } from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import FirstStep from './FirstStep';
import SecondStep from './SecondStep';
import Confirm from './Confirm';
import Success from './Success';
import { AppContext } from '../Context/Context';
import { consts } from '../../../../../consts/consts';

const handleSteps = (step: number) => {
  switch (step) {
    case 0:
      return <FirstStep />
    case 1:
      return <SecondStep />
    case 2:
      return <Confirm />
    default:
      throw new Error('Unknown step')
  }
}

const StepForm = () => {
  const { activeStep } = useContext(AppContext)

  return (
    <>
      {activeStep === consts.stepLabels.length ? (
        <Success />
      ) : (
        <>
          <Box sx={{ my: 5 }}>
            <Typography variant='h4' align='center'>
              Create Product
            </Typography>
          </Box>
          <Stepper activeStep={activeStep} sx={{ py: 3 }} alternativeLabel>
            {consts.stepLabels.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>

          {handleSteps(activeStep)}
        </>
      )}
    </>
  )
}

export default StepForm;
