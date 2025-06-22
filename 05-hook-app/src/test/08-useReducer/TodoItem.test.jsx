import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../08-useReducer/TodoItem";

describe('Pruebas en el componente', () => {

    const todo = {
        id: 1,
        describe: 'Piedra del Alma',
        done: false,
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Debe de mostrar el componente el Todo Pendiente de completar', () => {

        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const liElement = screen.getByRole('listitem');
        //console.log(liElement.innerHTML);

        expect(liElement.className).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        console.log(spanElement.className);
        expect(spanElement.className).toContain('align-self-center');
        expect(spanElement.classList).not.toContain('text-decoration-line-through');
        
        //screen.debug();

    })

    test('Debe de mostrar el componente el Todo completado', () => {

        todo.done = true;

        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        expect(spanElement.classList).toContain('text-decoration-line-through');
        
        //screen.debug();

    });

    test('span debe de llamar el ToggleTodo ', () => {

        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const spanElement = screen.getByLabelText('span');
        fireEvent.click(spanElement);

        expect(onToggleTodoMock).toHaveBeenCalledWith( todo.id );

    });

    test('span debe de llamar el DeleteTodo ', () => {

        render(
            <TodoItem 
                todo={todo}
                onToggleTodo={onToggleTodoMock}
                onDeleteTodo={onDeleteTodoMock}
            />
        );

        const buttonElement = screen.getByLabelText('button-delete');
        //console.log(buttonElement.innerHTML);
        fireEvent.click(buttonElement);

        expect(onDeleteTodoMock).toHaveBeenCalledWith( todo.id );

    });

})