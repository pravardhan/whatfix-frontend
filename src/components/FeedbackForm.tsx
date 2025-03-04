import React, { useState } from 'react';
import { Pin } from '../common/interface';
import Modal from './Modal';
import Button from './Button';

interface FeedbackFormProps {
    pin?: Pin
    onSubmit: (feedback: string) => void;
    onClose: () => void;
}

const FeedbackForm: React.FC<FeedbackFormProps> = ({ pin, onSubmit, onClose }) => {
    const [feedback, setFeedback] = useState<string>(pin?.feedback || '');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        event.stopPropagation();
        onSubmit(feedback);
    };

    return (
        <Modal isOpen={true} onClose={onClose} title={'Please enter the Feedback'}>
            <div onClick={(e)=> {
                e.stopPropagation();
            }} style={{ backgroundColor: 'white', width: 500, height: 250 }}>
                <h2>Please enter the feedback</h2>
                <form onSubmit={handleSubmit}>
                    <textarea
                        value={feedback}
                        onChange={(e) => setFeedback(e.target.value)}
                        placeholder="Enter your feedback"
                    />
                    <Button type="submit" label='Submit'/>
                    <Button type="submit" label='Close' onClick={onClose}/>
                    {/* <button type="submit">Submit</button>
                    <button type="button" onClick={onClose}>Close</button> */}
                </form>
            </div>
        </Modal>
    );
};

export default FeedbackForm;



