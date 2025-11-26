import { useHelloWorld } from "./hooks/helloWorld";

function App() {
    const { data, loading } = useHelloWorld();

    if (loading) return <h1>Loading...</h1>;

    return <h1>Server says: {data}</h1>;
}

export default App;
