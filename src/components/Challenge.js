import { useState } from "react";

function Challenge() {

    const [list, setList] = useState([
        {text: "Найти Джон Сину", completed: false },
        {text: "Уговорить Цоя продать сигарету Джон Сине", completed: true },
        {text: "Победить P Diddy в перестрелке с GAU-8 Avenger", completed: false },
    ]);

    const reset = () => {
        const newList = [...list];
        newList.completed = !newList.completed;
        setList(newList);
    }

    const reseting = () => setList([
        {text: "Найти Джон Сину", completed: true },
        {text: "Уговорить Цоя продать сигарету Джон Сине", completed: true },
        {text: "Победить P Diddy в перестрелке с GAU-8 Avenger", completed: true },
    ])

    return (
        <>
        <h1>Cписок квестов</h1>
        <ul>
            {list.map((item, index) => (
              <li key={index}
              style={{
                textDecoration: item.completed ? "none" : "line-through",
                cursor: "pointer"
              }}
              onClick={() => {
                const newText = [...list];
                newText[index].completed = !newText[index].completed;
                setList(newText);
              }}>
                {item.text}
               </li>
            ))}
        </ul>
        <button onClick={reseting}>Сбросить</button>
        </>
    )
}

export default Challenge;
