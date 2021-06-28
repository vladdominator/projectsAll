import { winners } from "../cars/base";

export async function deleteWinners(id: string | undefined): Promise<void> {
  (await fetch(`${winners}/${id}`, { method: 'DELETE'})).json();
}