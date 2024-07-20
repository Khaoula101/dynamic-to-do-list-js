document.addEventListener('DOMContentLoaded', function() {
    // Selecting DOM elements
    const addButton = document.getElementById('add-task-btn');
    const taskInput = document.getElementById('task-input');
    const taskList = document.getElementById('task-list');

    // Function to add a new task
    function addTask() {
        // Retrieve and trim the value from the input field
        const taskText = taskInput.value.trim();

        // If taskText is not empty, proceed to add task
        if (taskText !== '') {
            // Create new list item
            const listItem = document.createElement('li');
            listItem.textContent = taskText;

            // Create remove button
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remove';
            removeButton.className = 'remove-btn';

            // Add click event to remove button
            removeButton.onclick = function() {
                listItem.remove();
            };

            // Append remove button to list item
            listItem.appendChild(removeButton);

            // Append list item to task list
            taskList.appendChild(listItem);

            // Clear input field
            taskInput.value = '';
        } else {
            // Alert user if input field is empty
            alert('Please enter a task.');
        }
    }

    // Event listeners
    addButton.addEventListener('click', addTask);

    taskInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    // Initial call to addTask to set up event listeners
    addTask();
});
