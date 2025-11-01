import { useState } from "react"

function Profile() {

    const [text, setText] = useState("");
    const [text1, setText1] = useState("");
    const [text2, setText2] = useState("");
    const [items, setItems] = useState([]);

    const additem = () => {
        if (text.trim() !== "") {
            setItems([...items, text, text1, text2]);
            setText(""); 
            setText1("");
            setText2("");

        }
    }

    console.log(items);
    console.log(Array.isArray(items));

    return (
        <>
            <input id="frr?" value={text} type="text" onChange={(e) => setText(e.target.value)} placeholder="Введите свое имя"/>
            <br/>
            <input id="frr?" value={text1} type="text" onChange={(e) => setText1(e.target.value)} placeholder="Email"/>
            <br/>
            <input id="frr?" value={text2} type="text" onChange={(e) => setText2(e.target.value)} placeholder="Введите сообщение"/>
            <br/>
            <button onClick={additem}>Добавить</button>
        <ul>
            {items.map((item,index) => (
                <li key={index}>
                {item}
                </li>
            ))}
        </ul>
        <p>{text}</p>
        <br/>
        <img src="game.png" alt="nyan" />
        </>
    )
}

export default Profile;