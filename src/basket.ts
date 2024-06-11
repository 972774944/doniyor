import { Product } from "./data";

export const basket: Product[] = [];
// @ts-ignore
export const basketModal = new bootstrap.Modal("#basketModal", {
  keyboard: false,
});
export const HeaderBasket = document.querySelector("#HeaderBasket");
export const basketBody = document.querySelector("#basketBody");
export const basketClose = document.querySelector("#basketClose");
export const basketSave = document.querySelector("#basketSave");
