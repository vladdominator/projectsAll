import { NavItem } from "../navItem/navItem";

export async function nextWinners(): Promise<void> {
  const main = document.querySelector('.container__winners');
  if (!main) return;
  await main.append((new NavItem('winners')).element);
}