export async function getToDos(baseUrl: string) {
  try {
    const toDos = await fetch(`${baseUrl}/todos`);
    return toDos.json();
  } catch (e) {
    console.log(e);
  }
}
