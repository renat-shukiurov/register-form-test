import {useEffect, useState} from "react";

export const useLocation = () => {
    const [location, setLocation] = useState({latitude: 50.330479, longitude: 30.290205});

    useEffect(() => {
        window.navigator.geolocation
            .getCurrentPosition((position) => {
                const { latitude, longitude } = position.coords;
                setLocation({latitude, longitude})
            });
    }, [])

    return {...location};
}