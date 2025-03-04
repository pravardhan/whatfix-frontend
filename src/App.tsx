// src/App.tsx
import React, { useState, useEffect } from 'react';
import FeedbackPin from './components/FeedbackPin';
import FeedbackForm from './components/FeedbackForm';
import usePin from './hooks/usePin';
import { Pin } from './common/interface'
import './App.css';

const App: React.FC = () => {
    const {pins, createPin, updatePin } = usePin();
    const [selectedPin, setSelectedPin] = useState<Pin | null>(null);
    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const x = event.clientX;
        const y = event.clientY;
        console.log('coordinates', x, y);
        setSelectedPin({ x, y, feedback: '' });
    };

    const onPinClick = (pin: Pin)=> {
        setSelectedPin(pin);
    }

    const saveFeedback = (feedback: string) => {
        if (selectedPin) {
            const newPin = { ...selectedPin, feedback };
            console.log('newPin', newPin);
            if(selectedPin.id) {
                updatePin(newPin);
            } else {
                createPin(newPin);
            }
            setSelectedPin(null);
        }
    };

    useEffect(() => {
        // const fetchedPins = usePin();
        // setPins(fetchedPins);
        // Fetch existing pins from the backend when the component mounts
        // setPins(fetchedPins);
    }, []);

    return (
        <div onClick={handleClick} style={{ position: 'relative', height: '100vh' }}>
            <img src={'https://stationerydukan.com/wp-content/uploads/2022/10/World-Political.jpg'} width={'100vw'} height={'100vw'} style={{ position: 'absolute', top: 0, left: 0, width: '100vw', height: '100vh', opacity: 0.2 }} />
            {pins.map((pin, index) => (
                <FeedbackPin key={index} pin={pin} onClick={onPinClick}/>
            ))}
            {selectedPin && (
                <FeedbackForm
                    pin={selectedPin}
                    onSubmit={saveFeedback}
                    onClose={() => setSelectedPin(null)}
                />
            )}
        </div>
    );
}

export default App;