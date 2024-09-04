import { useState } from "react"
import EmojiPicker from 'emoji-picker-react';
import Dialog from "@mui/material/Dialog";
import { DialogTitle } from "@mui/material";

const TodoList = () => {
    const [todo, seTodo] = useState({
        title:""
    });

    const [todoList, setTodoList] = useState([]);

    const [emojiPickerIndex, setEmojiPickerIndex] = useState(null);

    const [openDialog, setDialog] = useState(false);
  
    const handleEmoji = (e, index) => {
        const updatedTodoList = [...todoList];
        updatedTodoList[index].emoji = e.emoji;
        setTodoList(updatedTodoList);
        setEmojiPickerIndex(null);
    };

    const openDialogBox = (e,index, title) => {
        setDialog(true);
        seTodo({title:title})
    }

    const closeDilogBox = () => {
        setDialog(false);
    }

    const handleToDo = (e) => {
        const { value, name } = e.target;
       // console.log("value:", value);
        seTodo({title:value})
    }

    const onAddTodo = () => {
       // console.log("todo", todo);
        if (!todo.title) {
            return;
        }

        setTodoList((prevState) => [...prevState,{title:todo.title, emoji:""}]);
       // console.log("todoList", todoList);
        seTodo({title:""});
    };

    const editTodo = (e, index) => {
        console.log("e.target.value", e);
        const updatedTodoList = [...todoList];
        updatedTodoList[index].title = todo.title;
        setTodoList(updatedTodoList);
        seTodo({title:""});
    }

    const deleteTodo = (e, index) =>{
        const updatedTodoList = [...todoList];
        updatedTodoList.splice(index,1);
        setTodoList(updatedTodoList);
    }

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
                            return <li key={index}>
                                {item.title}
                                <button onClick={() => toggleEmojiPicker(index)}>
                                    {item.emoji ? item.emoji : '+'}
                                </button>

                                {emojiPickerIndex === index && (
                                    <div>
                                        <EmojiPicker onEmojiClick={(e)=>handleEmoji(e,index)} />
                                    </div>
                                )}
                                <button onClick={(e)=>openDialogBox(e,index, item.title)}>Edit</button>
                                <button onClick={(e) => deleteTodo(e, index)}>Delete</button>
                                <Dialog onClose={closeDilogBox} open={openDialog}>
                                <input
                                    type="text"
                                    value={todo.title}
                                    name="todoTitle"
                                    placeholder="Enter tITLE"
                                    onChange={handleToDo}
                                />
                                 <button onClick={(e) => editTodo(e, index)}>Edit Todo</button>
                                </Dialog>
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