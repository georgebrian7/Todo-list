import {setDate} from "date-fns";

class Project {
    constructor(title,priority,duedate){
        this.title=title;
        this.priority=priority;
        this.duedate=duedate;
    }

    setProject(title,priority,duedate){
        this.title=title;
        this.priority=priority;
        this.duedate=duedate;
    }
}

class taskItem extends Project{
    constructor(title,priority,duedate,task,description){
        super(title,priority,duedate)
        this.task=task;
        this.description=description;
    }
    setTaskItem(task,description){
        this.task=task;
        this.description=description;
    }
}

//display function

const addProject = function () {
    const content = document.getElementById('content');
    const main = document.createElement('div');
    
    const title = document.createElement('div');
    title.textContent = 'Project Title';
    const input = document.createElement('input');
    
    const priority = document.createElement('div');
    priority.textContent = 'Priority';
    const input2 = document.createElement('input');
    
    const duedate = document.createElement('div');
    duedate.textContent = 'Due Date';
    const input3 = document.createElement('input');
    
    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add Project';

    const output = document.createElement('div'); 

    submitBtn.addEventListener('click', () => {
        const project = new Project(input.value, input2.value, input3.value);
        output.innerHTML = `<p><strong>Title:</strong> ${project.title}</p>
                            <p><strong>Priority:</strong> ${project.priority}</p>
                            <p><strong>Due Date:</strong> ${project.duedate}</p>`;
    });

    content.append(main);
    main.append(title, input, priority, input2, duedate, input3, submitBtn, output);
};

const addTask = function () {
    const content = document.getElementById('content');
    const main2 = document.createElement('ol');
    const listItem = document.createElement('li');

    const task = document.createElement('div');
    task.textContent = 'Task';
    const input4 = document.createElement('input');

    const description = document.createElement('div');
    description.textContent = 'Description';
    const input5 = document.createElement('input');

    const submitBtn = document.createElement('button');
    submitBtn.textContent = 'Add Task';

    const output = document.createElement('div'); 

    submitBtn.addEventListener('click', () => {
        const taskObj = new taskItem("", "", "", input4.value, input5.value);
        output.innerHTML = `<p><strong>Task:</strong> ${taskObj.task}</p>
                            <p><strong>Description:</strong> ${taskObj.description}</p>`;
    });

    content.append(main2);
    main2.append(listItem);
    listItem.append(task, input4, description, input5, submitBtn, output);
};



export{addProject,addTask}