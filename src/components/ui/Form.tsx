'use client'

import React from 'react';
import { useForm, FormProvider } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import CustomInput from './input';


const schema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Invalid email address")
});


const Form = ({ onSubmit }: any) => {
  const methods = useForm({
    resolver: zodResolver(schema)
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <CustomInput name="firstName" label="First Name" />
        <CustomInput name="lastName" label="Last Name" />
        <CustomInput name="email" label="Email" />
        <button type="submit">Submit</button>
      </form>
    </FormProvider>
  );
};

export default Form;
