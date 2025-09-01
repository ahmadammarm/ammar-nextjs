import React from 'react';
import '../styles/loading.css';

const InfiniteScrollLoading = () => {
    return (
        <div className="flex justify-center items-center">
            <div className="flex flex-col items-center justify-center">
                <div className="loader"></div>
            </div>
        </div>
    );
};

export default InfiniteScrollLoading;