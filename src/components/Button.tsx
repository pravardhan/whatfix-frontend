import React from 'react';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    disabled?: boolean;
    type?: "button" | "submit" | "reset" | undefined;
}

const Button: React.FC<ButtonProps> = ({ label, onClick, disabled = false, type, ...props }) => {
    return (
        <button 
            onClick={onClick} 
            disabled={disabled} 
            style={{
                padding: '10px 20px',
                backgroundColor: disabled ? '#ccc' : '#61dafb',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: disabled ? 'not-allowed' : 'pointer',
                fontSize: '16px',
            }}
            type={type || 'button'}
            {...props}
        >
            {label}
        </button>
    );
};

export default Button;
