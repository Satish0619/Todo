const todo=[
    {
        "id": "c9fe647b-9f1e-478b-ad87-789ec2ca443f",
        "task": "yyry",
        "isEditing": false,
        "Completed": false
    },
    {
        "id": "539e4cbe-b87a-4fd6-9b31-dc8748d5bc54",
        "task": "g",
        "isEditing": false,
        "Completed": false
    },
    {
        "id": "736725ab-a3ea-4462-bde9-81b4ffd364ae",
        "task": "g;h",
        "isEditing": false,
        "Completed": false
    },
    {
        "id": "04986df7-6bbb-4666-ad12-400fb9807068",
        "task": "jhjh",
        "isEditing": false,
        "Completed": false
    },
    {
        "id": "3f5e190d-c9ab-44bb-be2c-269bfcb84c0e",
        "task": "thoierh",
        "isEditing": false,
        "Completed": true
    },
    {
        "id": "cf0ce9eb-bde5-4e63-aa71-b7f8eefc2915",
        "task": "toheoj",
        "isEditing": false,
        "Completed": true
    },
    {
        "id": "fd72d491-ce77-4eb7-a53f-e8dc14e4a4cd",
        "task": "one",
        "isEditing": false,
        "Completed": true
    }
]

// function getTodoCount(status){
//     let Completed=0
//     let Pending=0
//     if (status == 'Completed'){
//         for (let s; s<todo.length ; s++)
//           if   (todo[s].Completed)
//             Completed ++
//     }
        
//     for (let s=0; s<todo.length; s++){
//         (todo[s].Completed===true){
//         Completed++
//        }
//        Pending++
        
//     }
//     console.log(Completed,Pending);
    

// }

// function getTodoCount(status){
//     const filterTodo = todo.filter((t)=>{
//         if (status == "Completed" && t.Completed){
//             return true
//         }else if (status == "Pending" && !t.Completed){
//             return true
//         }else if (status == "All"){
//             return true
//         }else{
//             return false
//         }
//     })    
// }

function getTodoCount(status){
    let completed = 0;
    for (let t of todo){
        if (t.Completed){
            completed++
        }
    }
    if (status == "Completed"){
        return completed
    } else if (status == "Pending"){
        return todo.length-completed
    }else{
        return todo.length
    }
}

    
console.log(getTodoCount("All"))
console.log(getTodoCount("Completed"))
console.log(getTodoCount("Pending"))