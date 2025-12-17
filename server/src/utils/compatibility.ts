import { IUser } from "../models/userModel";

export const calculateCompatibility = (
  currentUser: IUser,
  otherUser: IUser
) => {
  let score = Math.floor(Math.random() * 51) + 50;
  if (
    currentUser.sunSign === otherUser.sunSign ||
    currentUser.moonSign === otherUser.moonSign ||
    currentUser.risingSign === otherUser.risingSign
  ) {
    score += 10;
    if (score > 100) score = 100;
  } else {
    score -= 10;
    if (score < 50) score = 50;
  }
  return score;
};
