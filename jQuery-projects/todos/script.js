$(document).ready(function() {
    const $newTaskInput = $('#new-task');
    const $addTaskButton = $('#add-task');
    const $taskList = $('#task-list');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || []; // let으로 변경

    // 초기 렌더링
    renderTaskList(tasks);

    $addTaskButton.click(function() {
        const taskText = $newTaskInput.val().trim();
        if (taskText !== '') {
            const newTask = { text: taskText, completed: false };
            tasks.push(newTask);
            saveTasksToLocalStorage(tasks);
            renderTaskList(tasks); // 추가
            $newTaskInput.val('');
        }
    });

    function renderTaskList(tasks) {
        $taskList.empty(); // 기존 목록 비우기
        tasks.forEach((task, index) => addTaskToList(task, index));
    }

    function addTaskToList(task, index) {
        const $newTask = $('<li><span>' + task.text + '</span><button>삭제</button></li>');
        $newTask.data('index', index); // data 속성에 index 저장

        if (task.completed) {
            $newTask.addClass('completed');
        }
        $taskList.append($newTask);

        // 할 일 완료 표시
        $newTask.find('span').click(function() {
            const index = $(this).closest('li').data('index');
            tasks[index].completed = !tasks[index].completed;
            saveTasksToLocalStorage(tasks);
            renderTaskList(tasks); // 추가
        });

        // 삭제 버튼 이벤트
        $newTask.find('button').click(function() {
            const index = $(this).closest('li').data('index');
            tasks.splice(index, 1);
            saveTasksToLocalStorage(tasks);
            renderTaskList(tasks); // 추가
        });
    }

    function saveTasksToLocalStorage(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
});