import { useEffect, useState } from "react";

const useWatch = () => {
    const [watches, setWatches] = useState([]);

    useEffect(() => {
        fetch('https://still-stream-41987.herokuapp.com/items')
            .then(res => res.json())
            .then(data => setWatches(data));
    }, []);
    return [watches, setWatches]
}

export default useWatch;