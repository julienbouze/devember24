import React from 'react';
import { isNovember24, getCurrentDate } from '@/utils/functions';
import { Montserrat } from "next/font/google";

const ms = Montserrat({ subsets: ['latin'], weight: '400' });

const DayChallenge = () => {
    return (
        <div>
            {isNovember24() && (
                <div className={`${ms.className} text-lg`}>
                    <p>Today&#39;s challenge is n° <span className='text-cyan-300 font-bold'>{getCurrentDate()}</span></p>
                </div>
            )}
        </div>
    );
};

export default DayChallenge;

