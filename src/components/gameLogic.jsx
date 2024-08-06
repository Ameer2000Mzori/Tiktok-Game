import { insertCoin, onTikTokLiveEvent } from "playroomkit";
import useSocket from "../hooks/useSocket.js";
import {
  addForAll,
  addKurdistanPoint,
  addSyriaPoint,
  addTurkeyPoint,
} from "../feature/pointsSlice";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";

export function checkTheGift() {
  const dispatch = useDispatch();
  const { gift } = useSocket();
  const [previousGift, setPreviousGift] = useState(null);

  useEffect(() => {
    if (gift && gift[0] && gift[0] !== previousGift) {
      console.log("New gift received:", gift[0]);
      if (gift[0]?.giftId === 5655) {
        /* this is for flower syria */
        dispatch(addSyriaPoint(gift[0]));
      } else if (gift[0]?.giftId === 5269) {
        /* this is for tiktok kurdistan */
        dispatch(addKurdistanPoint(gift[0]));
      } else {
        // this is for all flags
        dispatch(addForAll(gift[0]));
      }
      setPreviousGift(gift[0]);
    }
  }, [gift, previousGift, dispatch]);
}
