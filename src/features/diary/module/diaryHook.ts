import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FlowerIdPayload, flowerListRequest, RootState } from "../reducer/gardenSlice";

export function useFlowerList() {
    const { gardenLoading } = useSelector((state: RootState) => state.garden);
    const dispatch = useDispatch();
    const list = useCallback((data: FlowerIdPayload) => {
        dispatch(flowerListRequest(data));
    }, [])
    return { gardenLoading, list};
}
