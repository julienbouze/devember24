import React from 'react';
import { isNovember24, getCurrentDate } from '@/utils/functions';
import { challenges } from '@/utils/constants';


const Challenges = () => {
    return (
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3`}>
            {challenges.map((item, index) => (
                <div className={`flex p-2 justify-center`} key={index}>
                    <p className={`${index + 1 === getCurrentDate() && isNovember24() ? 'text-cyan-300' :  ''}`}>{index + 1}. {item.title}</p>
                </div>
            ))}
        </div>
    );
};

export default Challenges;


