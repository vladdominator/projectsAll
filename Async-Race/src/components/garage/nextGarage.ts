import { NavItem } from "../navItem/navItem";
import { updateGarage } from "./updateGarage";

export async function nextGarage(): Promise<void> {
  const main = document.querySelectorAll('.container')[1];
  if (!main) return;
  await main.append((new NavItem('garage')).element);
  await updateGarage();
}