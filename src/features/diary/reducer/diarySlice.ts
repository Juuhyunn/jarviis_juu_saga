import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface DiaryDataPayload {
    data: {
        id: number,
        diary_date: string,
        weather: string,
        location: string,
        drawing: string,
        contents: string,
        memo: string,
        log_id: string,
        user_id: number
    }
}
export interface DiaryFindPayload {
    user_id: number
    diary_date: string
}
export interface DiaryMemoPayload {
    id: number
    user_id: number
    memo: string
}

export interface DiaryState {
    diaryLoading: boolean;
    diaryData: any;
    error: any;
}

export interface ParamType {
    id: number;
}
const initialState: DiaryState = {
    diaryLoading: false,
    diaryData: null,
    error: null,
};

const DiarySlice = createSlice({
    name: "diaries",
    initialState,
    reducers: {
        diaryFindRequest(state: DiaryState, _action: PayloadAction<DiaryFindPayload>) {
            // alert("Slice!")
            state.diaryLoading = true;
            state.error = null;
        },
        diaryFindSuccess(state: DiaryState, action: PayloadAction<DiaryDataPayload>) {
            // alert("Slice SUCCESS!")
            // alert(`action.payload :: ${JSON.stringify(action.payload)}`)
            state.diaryLoading = false;
            state.diaryData = action.payload;
            // alert(`diaryData :: ${JSON.stringify(state.diaryData)}`)
        },
        diaryFindFailure(state: DiaryState, action: PayloadAction<{ error: any }>) {
            alert("Slice FAIL!")
            state.diaryLoading = true;
            state.error = action.payload;
        },
        diaryMemoRequest(state: DiaryState, _action: PayloadAction<DiaryMemoPayload>) {
            alert("Slice!")
            state.diaryLoading = true;
            state.error = null;
        },
        diaryMemoSuccess(state: DiaryState, action: PayloadAction<DiaryMemoPayload>) {
            alert("Slice SUCCESS!")
            state.diaryLoading = false;
            // state.diaryData = action.payload;
            window.location.href = "../diary/diary"
        },
        diaryMemoFailure(state: DiaryState, action: PayloadAction<{ error: any }>) {
            alert("Slice FAIL!")
            state.diaryLoading = true;
            state.error = action.payload;
        },
    }
})


const store = configureStore({
    reducer: {
        diary: DiarySlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
const { reducer, actions } = DiarySlice;

export const {
    diaryFindRequest,
    diaryFindSuccess,
    diaryFindFailure,
    diaryMemoRequest,
    diaryMemoSuccess,
    diaryMemoFailure
} = actions;

export default reducer;