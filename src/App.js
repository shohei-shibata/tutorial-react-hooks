import React, {useState} from 'react';
import './App.css';

const initialTodo = ['Bake pie', 'Plan vacation', 'Walk dog'];

function TodoList({todo, onClick}) {
	return (
		<ul className="todo">
			{ todo.map(item => { return <li key={item} onClick={onClick}>{item}</li> }) }
		</ul>
	);
}

function InputForm({input, onSubmit, onChange}) {
	return (
		<form onSubmit={onSubmit}>
			<input 
				type="text" 
				placeholder="Type and hit enter to add an item"
				value={input} 
				onChange={onChange} 
				autoFocus 
			/>
		</form>
	);
}

function App() {
	const [input, setInput] = useState('');
	const [todo, setTodo] = useState(initialTodo);	
	const updateInput = (e) => {
		setInput(e.target.value);
	}
	const addTodo = (e) => {
		e.preventDefault();
		if (input.length > 0) {
			setTodo([...todo, input]);
			setInput('');
		}
	}
	const deleteTodo = (e) => {
		console.log('delete', e.target.innerText);
		setTodo(todo.filter(item => {
			return item !== e.target.innerText
		}));
	}
	return (
		<div>
		  <h1>To Do List</h1>
		  <InputForm input={input} onSubmit={addTodo} onChange={updateInput}/>
		  <TodoList todo={todo} onClick={deleteTodo} />	  
		</div>
	  );
}

export default App;
