


import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";



export default function TimelineModify(props) {
    const t = props.data
    // const defaultValues = {
    //     id: t.id,
    //     user_id: t.user_id, //로그인 되면 id 넣기
    //     log_type: t.log_type,
    //     contents: t.contents,
    //     location: t.location,
    //     log_date: t.log_date,
    //     weather: t.weather,
    // }
    // const dispatch = useDispatch()
    // const [mode, setMode] = useState(0)
    // const today = new Date()
    // const { control, formState, handleSubmit, reset, getValues } = useForm({
    //     mode: 'onChange',
    //     defaultValues,
    // });
    return (<>
        <Box component="form" sx={{ m: 3, width: 1550, maxWidth: '100%', }} noValidate autoComplete="off">
            <TextField
                id="standard-multiline-static"
                label="MEMO"
                multiline
                rows={4}
                // defaultValue="MEMO"
                variant="standard"
                fullWidth
            />
            {/* <Button type="submit" variant="text" >수정 완료</Button> */}
            <td>
                <img class="diary-pencil" src={require("features/diary/images/edit.png").default}
                    onClick={() => setMode(0)} />
                    </td><h2>그만 할래!</h2>
    </Box>
    </>)
}