import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import { Link } from 'react-router-dom';
import * as yup from 'yup';
import _ from '@lodash';
import { LayOut } from 'features/common';
import React, { useCallback, useState } from 'react';
import { useDispatch } from 'react-redux';
import 'features/user/style/UserFGPassword.scss'
// import { modify } from 'features/user/reducer/userSlice'
/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
});

const defaultValues = {
  email: '',
};


function ForgotPassword() {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema),
  });
  const dispatch = useDispatch()


  const { isValid, dirtyFields, errors } = formState;

  function onSubmit() {
    reset(defaultValues);
  }

  return (
      <LayOut>
    <div className='User-forgotPassword'>
      <div>
        <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }}>
          <Card >
            <CardContent className="flex flex-col items-center justify-center p-16 sm:p-24 md:p-32">
              <Typography variant="h6" className="mt-16 mb-24 font-semibold text-18 sm:text-24">
                비밀번호 찾기
              </Typography>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <form method= 'PUT' onSubmit= {useCallback(
                e => {
                  e.preventDefault()
                  dispatch(modify({...modify}))}
                )}>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      className="mb-16"
                      label="Email"
                      autoFocus
                      type="email"
                      error={!!errors.email}
                      helperText={errors?.email?.message}
                      variant="outlined"
                      fullWidth
                    />
                  )}
                />
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br/>
                <Button
                  variant="contained"
                  color="primary"
                  className="w-224 mx-auto mt-16"
                  aria-label="Reset"
                  disabled={_.isEmpty(dirtyFields) || !isValid}
                  type="submit"
                >
                  이메일 보내기
                </Button>
              </form>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <div className="flex flex-col items-center justify-center pt-32 pb-24">
                <Link className="font-normal" to="/users/login">
                  로그인 화면으로 돌아가기
                </Link>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
    </LayOut>
  );
}

export default ForgotPassword;
