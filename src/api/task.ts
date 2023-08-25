import { TaskModel } from "../models";
import { ENV } from "../utils";

export class Task{
    create (task: TaskModel) {
        const tasks: TaskModel[] =  this.obtain();
        tasks.push(task);
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS, JSON.stringify(tasks));
    }

    obtain (): TaskModel[] {
        const tasks: TaskModel[] = JSON.parse(localStorage.getItem(ENV.LOCAL_STORAGE.TASKS) || '[]');
        return tasks;
    }

    changeAllTasks (tasks: TaskModel[]) {
        localStorage.setItem(ENV.LOCAL_STORAGE.TASKS, JSON.stringify(tasks));
    }
}