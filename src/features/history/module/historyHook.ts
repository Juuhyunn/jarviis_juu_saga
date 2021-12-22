import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HistoryPayload, historyRequest, RootState, ListDataPayload, historyListRequest, HistoryDataPayload, historyModifyRequest} from "../reducer/historySlice";

export function useHistory() {
    const { historyLoading } = useSelector((state: RootState) => state.history);
    const dispatch = useDispatch();

    const create = useCallback((data: HistoryPayload) => {
        dispatch(historyRequest(data));
    }, [])
    return { historyLoading, create};
}

export function useHistoryList() {
    alert("Hook")

    const { historyLoading } = useSelector((state: RootState) => state.history);
    const dispatch = useDispatch();

    const list = useCallback((data: ListDataPayload) => {
        dispatch(historyListRequest(data));
    }, [])
    return { historyLoading, list};
}

export function useHistoryModify() {
    alert("Hook")

    const { historyLoading } = useSelector((state: RootState) => state.history);
    const dispatch = useDispatch();

    const list = useCallback((data: HistoryDataPayload) => {
        dispatch(historyModifyRequest(data));
    }, [])
    return { historyLoading, list};
}