interface TodosArray{
    id:number;
    todo:string;
    checked:boolean;
}

interface ModalInputProps{
    create:(todo: TodosArray)=> void;
}

interface TotoProps{
    todo: TodosArray;
    deleteTodoItem: (id:  number) => void;
    update: (id: number) => void;
}
