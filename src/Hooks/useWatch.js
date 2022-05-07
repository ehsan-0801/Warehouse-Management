import { useEffect, useState } from "react";

const useWatch = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/items')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);
    return [watches, setWatches]
}

export default useWatch;