import { useState } from "react"
import EmojiPicker from 'emoji-picker-react';

const TodoList = () => {
    const [todoTitle, seTodoTitle] = useState("");

    const [todoList, setTodoList] = useState([]);

    const [emoji, setEmoji] = useState("");
    const [emojiPicker, setEmojiPicker] = useState(false);
  
    const handleEmoji = (e) => {
        console.log("ee",e);
      setEmoji(e.emoji);
     setEmojiPicker(false);
    };

    const handleToDo = (e) => {
        const { value, name } = e.target;
        seTodoTitle(value)
    }

    const onAddTodo = () => {
        if (!todoTitle) {
            return;
        }

        setTodoList((prevState) => [...prevState, todoTitle]);
        seTodoTitle("");
    };


    return (
        <div>
            <div>
                <p>Title</p>
                <input
                    type="text"
                    value={todoTitle}
                    name="todoTitle"
                    placeholder="Enter tITLE"
                    onChange={handleToDo}
                />
                <button onClick={onAddTodo}>Add Todo</button>
            </div>
            <hr />
            <div>
                <h1>My Todos</h1>
                <hr />
                {todoList?.length > 0 ? (
                    <ul>
                        {todoList.map((item, index) => {
                            return <li key={index}>{item}
                                <button onClick={() => setEmojiPicker(!emojiPicker)}>
                                    {emoji ? emoji : 'Add Emoji'}
                                </button>

                                {emojiPicker && (
                                    <div>
                                        <EmojiPicker onEmojiClick={handleEmoji} />
                                    </div>
                                )}
                            </li>;
                        })}
                    </ul>
                ) : (
                    <p>No todo available</p>
                )}
            </div>

        </div>
    )
}

export default TodoList;