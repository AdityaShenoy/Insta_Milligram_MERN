export async function getHelloWorld() {
    console.log(import.meta.env);
    const res = await fetch(import.meta.env.VITE_SERVER_URL);
    return res.text();
}
