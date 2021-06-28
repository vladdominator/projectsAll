import { winners } from "../cars/base";

interface Winners {
  id: string | undefined,
  time: number | undefined,
  wins: number,
}
async function getWinner(id: string | undefined): Promise<Winners> {
  return (await fetch(`${winners}/${id}`)).json();
}
async function updateWinner(id: string | undefined, body: Winners): Promise<void> {
  (await fetch(`${winners}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })).json();
}
async function createWinner(body: Winners): Promise<void> {
  (await fetch(winners, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json'
    }
  })).json()
}
async function getWinnerStatus(id: string | undefined): Promise<number> {
  return (await fetch(`${winners}/${id}`)).status;
}

export async function saveWinner(id: string | undefined, time: number | undefined): Promise<void> {
  const winnerStatus = await getWinnerStatus(id);
  if (winnerStatus === 404) {
    await createWinner({
      id,
      wins: 1,
      time,
    })
  } else {
    const winner = await getWinner(id);
    if (time && winner.time) {
      await updateWinner(id, {
        id,
        wins: winner.wins + 1,
        time: time < winner.time ? time : winner.time,
      })
    }
  }
}