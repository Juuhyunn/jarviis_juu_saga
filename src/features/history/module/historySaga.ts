import { PayloadAction } from "@reduxjs/toolkit";
import { call, put, takeLatest } from "redux-saga/effects";
import { HistoryDataPayload, historyFailure, HistoryPayload, historyRequest, historySuccess, ListDataPayload } from "features/history/reducer/historySlice";
import { historyListRequest, historyListSuccess, historyListFailure } from "features/history/reducer/historySlice"
import { historyModifyRequest, historyModifySuccess, historyModifyFailure } from "features/history/reducer/historySlice";
import { historyAPI } from "features/history";

function* create(action: PayloadAction<HistoryPayload>) {
    try {
        alert("Aaaaaaaaaaa")
        const result: HistoryDataPayload = yield call(
            historyAPI.createAPI,
            action.payload
        );
        yield put(historySuccess(result));
        alert("나 결과 가지고 도라옴")
        window.location.href = "/history/history"

    } catch (error: any) {
        yield put(historyFailure(error))
        alert("에ㅓㄹ에러에러에ㅓㄹ")
    }
}

export function* watchCreate() {
    yield takeLatest(historyRequest.type, create);
}
//리스트
function* list(action: PayloadAction<ListDataPayload>) {
    try {
        // alert("SAGA")
        const result: HistoryDataPayload = yield call(
            historyAPI.listAPI,
            action.payload
        );
        // alert(result)
        yield put(historyListSuccess(result));
        // alert("나 결과 가지고 도라옴")
        // alert(JSON.stringify(result.data))

        window.localStorage.setItem('sessionHistory', JSON.stringify(result.data))

    } catch (error: any) {
        yield put(historyListFailure(error))
        // alert("에ㅓㄹ에러에러에ㅓㄹ")
        alert(error)
    }
}

export function* watchHistoryList() {
    yield takeLatest(historyListRequest.type, list);
}
//수정
function* modify(action: PayloadAction<HistoryDataPayload>) {
    try {
        alert("SAGA")
        const result: HistoryDataPayload = yield call(
            historyAPI.modifyAPI,
            action.payload
        );
        alert(result)
        yield put(historyModifySuccess(result));
        // alert("나 결과 가지고 도라옴")
        // alert(JSON.stringify(result.data))
        window.location.href = "/history/history"

        // window.localStorage.setItem('sessionHistory', JSON.stringify(result.data))

    } catch (error: any) {
        yield put(historyModifyFailure(error))
        // alert("에ㅓㄹ에러에러에ㅓㄹ")
        alert(error)
    }
}

export function* watchHistoryModify() {
    yield takeLatest(historyModifyRequest.type, modify);
}