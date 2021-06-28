import { garage } from "./base";
import { deletePage } from "./deletePage";
import { deleteWinners } from "../winnersPage/deleteWinners";

async function removeCar(item: Element): Promise<void> {
  (await fetch(`${garage}/${item.parentElement?.parentElement?.id}`, {method: "DELETE"})).json();
  await deletePage();
  await deleteWinners(item.parentElement?.parentElement?.id);
}
export function deleteCar(e: Event): void {
  const buttonDelete = <HTMLElement>e.target;
  if (buttonDelete.id === 'car__remove') {
    removeCar(buttonDelete);
  }
}