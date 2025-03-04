// src/components/FeedbackPin.tsx
import React from 'react';
import { Pin } from '../common/interface';
import { ReactComponent as PinIcon} from '../icons/pin.svg'

interface FeedbackPinProps {
    pin: Pin;
    onClick: (pin: Pin)=>void;
}

const FeedbackPin: React.FC<FeedbackPinProps> = ({ pin, onClick }) => {
    return (
        <div
            style={{
                position: 'fixed',
                left: pin.x,
                top: pin.y,
            }}
            title={pin.feedback}
            onClick={(event: React.MouseEvent<HTMLDivElement>)=> {
                event.stopPropagation();
                onClick(pin);
            }}
        >
            <PinIcon />
            </div>
    );
};

export default FeedbackPin;