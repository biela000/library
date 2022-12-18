import {Photo} from "./Photo";
import {Issues} from "./Issues";
import {Magazine} from "./Magazine";

export type MagazinesServiceOutput = {
  photos: Photo[],
  issues: Issues[],
  magazines: Magazine[],
};
