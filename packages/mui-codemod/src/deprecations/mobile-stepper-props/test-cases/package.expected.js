import MobileStepper from '@org/ui/material/MobileStepper';
import { MobileStepper as MyMobileStepper } from '@org/ui/material';

<MobileStepper variant="progress" slotProps={{
  progress: { variant: 'determinate' }
}} />;
<MyMobileStepper
  variant="progress"
  slotProps={{
    progress: {
      ...{ variant: 'determinate' },

      ...{
        sx: { width: '100%' },
      }
    },
  }} />;

<CustomMobileStepper LinearProgressProps={{ variant: 'determinate' }} />;
