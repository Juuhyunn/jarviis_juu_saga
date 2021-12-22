import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { DiaryFindPayload, diaryFindRequest, RootState } from "../reducer/diarySlice";

export function useDiaryFind() {
    const { diaryLoading } = useSelector((state: RootState) => state.diary);
    const dispatch = useDispatch();
    const list = useCallback((data: DiaryFindPayload) => {
        dispatch(diaryFindRequest(data));
    }, [])
    return { diaryLoading, list};
}
