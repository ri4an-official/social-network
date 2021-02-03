import { useState } from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [day, setDay] = useState(0);
    const [month, setMonth] = useState(0);
    const [zodiac, setZodiac] = useState(null);
    return (
        <div>
            {zodiac && <h2>Ваш зодиак : {zodiac}</h2>}
            <div>
                <label>Введите день рождения</label>
                <input onChange={(e) => setDay(e.target.value.toLowerCase())} />
            </div>
            <div>
                <label>Введите месяц рождения</label>
                <input
                    onChange={(e) => setMonth(e.target.value.toLowerCase())}
                />
            </div>
            <button
                onClick={() => {
                    if (month === "январь") {
                        if (day >= 0 && day <= 10) setZodiac("Дева");
                        else if (day >= 10 && day <= 30) setZodiac("Скорпион");
                    }
                }}
            >
                Узнать зодиак
            </button>
        </div>
    );
};
