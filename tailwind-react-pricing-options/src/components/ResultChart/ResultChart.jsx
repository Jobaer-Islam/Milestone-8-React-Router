import React from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Ayaan", "physics": 85, "chemistry": 78, "math": 92 },
    { "id": 2, "name": "Maya", "physics": 90, "chemistry": 88, "math": 95 },
    { "id": 3, "name": "Rafi", "physics": 72, "chemistry": 69, "math": 75 },
    { "id": 4, "name": "Nadia", "physics": 95, "chemistry": 92, "math": 98 },
    { "id": 5, "name": "Zayan", "physics": 65, "chemistry": 70, "math": 68 },
    { "id": 6, "name": "Tania", "physics": 88, "chemistry": 84, "math": 90 },
    { "id": 7, "name": "Rohan", "physics": 78, "chemistry": 80, "math": 83 },
    { "id": 8, "name": "Farah", "physics": 91, "chemistry": 86, "math": 93 },
    { "id": 9, "name": "Imran", "physics": 82, "chemistry": 75, "math": 89 },
    { "id": 10, "name": "Lamia", "physics": 87, "chemistry": 90, "math": 94 }
]

const ResultChar = () => {
    return (
        <div>
            <LineChart width={600} height={600} data={resultData}>
                <XAxis dataKey={"name"}></XAxis>
                <YAxis></YAxis>
                <Line dataKey={"chemistry"} stroke="purple"></Line>
                <Line dataKey={"physics"} stroke="blue"></Line>
                <Line dataKey={"math"} stroke="cyan"></Line>
            </LineChart>
        </div>
    );
};

export default ResultChar;