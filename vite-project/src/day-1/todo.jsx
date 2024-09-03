import { useState } from "react"
import EmojiPicker from 'emoji-picker-react';

const TodoList = () => {
    const [todo, seTodo] = useState({
        title:""
    });


    const [todoList, setTodoList] = useState([]);

    const [emojiPickerIndex, setEmojiPickerIndex] = useState(null);
  
    const handleEmoji = (e, index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].emoji = e.emoji;
        setTodoList(updatedTodoList);
        setEmojiPickerIndex(null);
    };

    const handleToDo = (e) => {
        const { value, name } = e.target;
        seTodo({title:value})
    }

    const onAddTodo = () => {
        console.log("todo", todo);
        if (!todo.title) {
            return;
        }

        setTodoList((prevState) => [...prevState,{title:todo.title, emoji:""}]);
        console.log("todoList", todoList);
        seTodo({title:""});
    };

    const toggleEmojiPicker = (index) => {
        console.log("index", index);
        console.log("emojiPickerIndex1", emojiPickerIndex);
        setEmojiPickerIndex(emojiPickerIndex === index ? null : index);
        console.log("emojiPickerIndex2", emojiPickerIndex);
    };


    return (
        <div>
            <div>
                <p>Title</p>
                <input
                    type="text"
                    value={todo.title}
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
                            return <li key={index}>{item.title}
                                <button onClick={() => toggleEmojiPicker(index)}>
                                    {item.emoji ? item.emoji : 'Add Emoji'}
                                </button>

                                {emojiPickerIndex === index && (
                                    <div>
                                        <EmojiPicker onEmojiClick={(e)=>handleEmoji(e,index)} />
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