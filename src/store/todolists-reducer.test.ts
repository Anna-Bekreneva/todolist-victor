import {FilterValuesType, TodoListType} from '../App';
import {v1} from 'uuid';
import {
	AddTodoListAC,
	ChangeTodoListFilterAC,
	ChangeTodoListTitleAC,
	RemoveTodoListA–°,
	todolistsReducer
} from './todolists-reducer';

test('correct todolist should be removed', () => {
	let todolistId1 = v1();
	let todolistId2 = v1();

	const startState: Array<TodoListType> = [
		{id: todolistId1, title: 'What to learn', filter: 'all'},
		{id: todolistId2, title: 'What to buy', filter: 'all'}
	];

	const endState = todolistsReducer(startState, RemoveTodoListA–°(todolistId1));

	expect(endState.length).toBe(1);
	expect(endState[0].id).toBe(todolistId2);
});

test('correct todolist should be added', () => {
	let todolistId1 = v1();
	let todolistId2 = v1();

	let newTodolistTitle = 'New Todolist';

	const startState: Array<TodoListType> = [
		{id: todolistId1, title: 'What to learn', filter: 'all'},
		{id: todolistId2, title: 'What to buy', filter: 'all'}
	];

	const endState = todolistsReducer(startState, AddTodoListAC(newTodolistTitle, v1()));

	expect(endState.length).toBe(3);
	expect(endState[2].title).toBe(newTodolistTitle);
});

test('correct todolist should be change filter', () => {
	let todolistId1 = v1();
	let todolistId2 = v1();

	let newFilter: FilterValuesType = 'completed';

	const startState: Array<TodoListType> = [
		{id: todolistId1, title: 'What to learn', filter: 'all'},
		{id: todolistId2, title: 'What to buy', filter: 'all'}
	];

	const endState = todolistsReducer(startState, ChangeTodoListFilterAC(newFilter, todolistId2));

	expect(endState[0].filter).toBe('all');
	expect(endState[1].filter).toBe(newFilter);
});

test('correct todolist should be change its name', () => {
	let todolistId1 = v1();
	let todolistId2 = v1();

	let newTodolistTitle = 'New Todolist';

	const startState: Array<TodoListType> = [
		{id: todolistId1, title: 'What to learn', filter: 'all'},
		{id: todolistId2, title: 'What to buy', filter: 'all'}
	];

	const endState = todolistsReducer(startState, ChangeTodoListTitleAC(newTodolistTitle, todolistId2));

	expect(endState[0].title).toBe('What to learn');
	expect(endState[1].title).toBe(newTodolistTitle);
});