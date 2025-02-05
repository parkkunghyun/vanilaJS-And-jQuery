const newTaskInput = document.getElementById('new-task');
const addTaskButton = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', () => {
    const taskText = newTaskInput.value.trim();
    if (taskText !== '') {
        const newTask = document.createElement('li');
        newTask.innerHTML = `
            <span>${taskText}</span>
            <button class="delete-button">삭제</button>
        `;
        taskList.appendChild(newTask);
        newTaskInput.value = '';

        // 삭제 이벤트 리스너 추가
        const deleteButton = newTask.querySelector('.delete-button');
        deleteButton.addEventListener('click', () => {
            taskList.removeChild(newTask);
        })
    }
})