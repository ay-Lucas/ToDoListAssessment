export async function getToDos() {
  const JSON_SERVER_URL = "http://localhost:3001";
  try {
    const toDos = await fetch(`${JSON_SERVER_URL}/todos`);
    return toDos.json();
  } catch (e) {
    console.log(e);
  }
}
