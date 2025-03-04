import { useState, useEffect } from 'react';
import { getData, postData, putData } from '../common/api';

interface Pin {
    id?: number; // Assuming id is optional for new pins
    x: number;
    y: number;
    feedback: string;
}

const PINS_URL = '/api/pins'

const fetchPins = async ()=> {
    try {
        return await getData(PINS_URL);
    } catch (error) {
        console.error(error);
        throw error;
    }
}

const usePin = () => {
    const [pins, setPins] = useState<Pin[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    const getData = async () => {
        setLoading(true);
        try {
            const data = await fetchPins();
            setPins(data);
        } catch (err) {
            setError((err as Error).message);
        } finally {
            setLoading(false);
        }
    };

    const createPin = async (newPin: Pin) => {
        try {
            const createdPin = await postData(PINS_URL, newPin);
            setPins((prevPins) => [...prevPins, createdPin]);
        } catch (err) {
            setError((err as Error).message);
        }
    };

    const updatePin = async (updatedPin: Pin) => {
        try {
            // const response = await fetch(`http://localhost:8000/api/pins/${updatedPin.id}/`, {
            //     method: 'PUT',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify(updatedPin),
            // });
            // if (!response.ok) {
            //     throw new Error('Failed to update pin');
            // }
            const newPin = await putData(`${PINS_URL}/${updatedPin.id}/`, updatedPin);
            setPins((prevPins) => prevPins.map(pin => (pin.id === newPin.id ? newPin : pin)));
        } catch (err) {
            setError((err as Error).message);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { pins, loading, error, createPin, updatePin };
};

export default usePin;

