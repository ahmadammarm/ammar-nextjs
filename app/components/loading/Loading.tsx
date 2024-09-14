import React from 'react';
import './loading.css';

const Loading = () => {
    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="flex flex-col items-center justify-center">
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default Loading;