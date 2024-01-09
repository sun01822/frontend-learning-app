import React, { useState, useEffect } from 'react';
import ArrowButton from './ArrowButton';

const OurNews = () => {
    const imageDirectory = '/images/news';
    const imageFiles = [
        '/1.jpg',
        '/2.jpg',
        '/3.jpg',
        '/4.jpg',
        '/5.jpg',
    ];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const handleChangeImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageFiles.length);
    };


    return (
        <>
            <div className="p-10 bg-sky-200/50">
                <div className="flex items-center justify-center">
                    <div className="h-16 w-2 bg-green-500 mt-10 mr-2"></div><h1 className="text-5xl font-bold mb-4 text-center mt-10"><span className="text-green-500">Our</span> News</h1>
                </div>
                <div className="mt-16 mb-16">
                    <div className="w-2/3 bg-white shadow-lg rounded-lg p-8 mx-auto">
                        <img
                            src={imageDirectory + imageFiles[currentImageIndex]}
                            alt="Image"
                            className="w-full mb-4"
                        />
                        <div className="flex justify-end mt-4">
                            <ArrowButton onClick={handleChangeImage} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurNews;

