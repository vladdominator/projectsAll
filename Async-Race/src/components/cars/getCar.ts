import { CarsI } from "../../shared/api/CarsI";
import { garage } from "./base";

export async function getCar(id: string | undefined): Promise<CarsI> {
  return (await fetch(`${garage}/${id}`)).json();
}