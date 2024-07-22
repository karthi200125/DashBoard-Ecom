'use client'
import { Stepper } from 'react-form-stepper';


const CustomStepper = ({ step }: any) => {
  return <Stepper steps={[{ label: 'Cart Items' }, { label: 'User Address details' }, { label: 'Stripe CheckOut' }]} activeStep={step} />;
};

export default CustomStepper;