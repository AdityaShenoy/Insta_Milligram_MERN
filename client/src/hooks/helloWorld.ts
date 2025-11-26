import { useEffect, useState } from "react";
import { getHelloWorld } from "../api/helloWorld";

export function useHelloWorld() {
    const [data, setData] = useState<string>("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getHelloWorld().then((response) => {
            setData(response);
            setLoading(false);
        });
    }, []);

    return { data, loading };
}
