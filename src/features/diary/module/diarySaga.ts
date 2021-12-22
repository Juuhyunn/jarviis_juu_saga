import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import diaryAPI from "../reducer/diaryAPI";
import { DiaryDataPayload, diaryFindFailure, DiaryFindPayload, diaryFindRequest, diaryFindSuccess } from "../reducer/diarySlice";

// find
function* find(action: PayloadAction<DiaryFindPayload>) {
    try {
        // alert("SAGA!")
        const result: DiaryDataPayload = yield call(
            diaryAPI.findAPI,
            action.payload
        );
        yield put(diaryFindSuccess(result));
    } catch (error: any) {
        yield put(diaryFindFailure(error))
        alert(error)
    }
}

export function* watchDiaryFind() {
    yield takeLatest(diaryFindRequest.type, find);
}