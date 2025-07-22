import { StarRate } from "shared/ui/StarRating/StarRating";

export interface Rating {
  id: string;
  userId: string;
  rate: StarRate;
  feedback: string;
}
