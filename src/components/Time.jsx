import React, { useEffect, useState } from 'react';
import moment from 'moment';

const Time = () => {
    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className="text-center font-semibold">
            <p>
                <span className="font-bold">{currentTime.format('dddd')},</span>{" "}
                {currentTime.format('Do MMMM YYYY, h:mm:ss a')}
            </p>
        </div>
    );
};

export default Time;
