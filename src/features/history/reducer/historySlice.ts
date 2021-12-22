import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface HistoryDataPayload {
    // id: number
    // log_type: string,
    // contents: string,
    // location: string,
    // address: string,
    // log_date: string,
    // weather: string,
    data: [{
        id: number;
        x: string;
        y: string;
        location: string;
        address: string;
        log_date: string;
        weather: string;
        log_type: string;
        contents: string;
        user_id: number;

    }]
}

export interface ListDataPayload {
    data: {
        user_id: number;
        date: string;
    }

}

export interface HistoryPayload {
    id: number;
    location: string;
    address: string;
    log_date: string;
    weather: string;
    log_type: string;
    contents: string;
    user_id: number;
}

export interface HistoryState {
    historyLoading: boolean;
    historyData: any;
    error: any;
}
export interface ParamType {
    id: number;
}
const initialState: HistoryState = {
    historyLoading: false,
    historyData: null,
    error: null,
};

const historySlice = createSlice({
    name: "histories",
    initialState,
    reducers: {
        historyRequest(state: HistoryState, _action: PayloadAction<HistoryPayload>) {
            // alert("여기 누구있어요?")
            state.historyLoading = true;
            state.error = null;
        },
        historySuccess(state: HistoryState, action: PayloadAction<HistoryDataPayload>) {
            state.historyLoading = false;
            state.historyData = action.payload;
        },
        historyFailure(state: HistoryState, action: PayloadAction<{ error: any }>) {
            state.historyLoading = true;
            state.error = action.payload;
        },
        //리스트
        historyListRequest(state: HistoryState, _action: PayloadAction<ListDataPayload>) {
            // alert("여기 누구있어요?")
            state.historyLoading = true;
            state.error = null;
        },
        historyListSuccess(state: HistoryState, action: PayloadAction<HistoryDataPayload>) {
            // console.log(JSON.stringify(action.payload))
            state.historyLoading = false;
            state.historyData = action.payload;
        },
        historyListFailure(state: HistoryState, action: PayloadAction<{ error: any }>) {
            state.historyLoading = true;
            state.error = action.payload;
        },
        // 수정
        historyModifyRequest(state: HistoryState, _action: PayloadAction<HistoryDataPayload>) {
            // alert("여기 누구있어요?")
            state.historyLoading = true;
            state.error = null;
            // alert(JSON.stringify(_action.payload))
        },
        historyModifySuccess(state: HistoryState, action: PayloadAction<HistoryDataPayload>) {
            alert('성공했어요?')
            state.historyLoading = false;
            // state.historyData = action.payload;
        },
        historyModifyFailure(state: HistoryState, action: PayloadAction<{ error: any }>) {
            alert('실패했어요?')
            state.historyLoading = true;
            state.error = action.payload;
        },

    }
})


const store = configureStore({
    reducer: {
        history: historySlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = historySlice;

export const {
    historyRequest,
    historySuccess,
    historyFailure,
    historyListRequest,
    historyListSuccess,
    historyListFailure,
    historyModifyRequest,
    historyModifySuccess,
    historyModifyFailure
} = actions;

export default reducer;