const todoList = () => {
  all = []
  const add = (todoItem) => {
    all.push(todoItem)
  }
  const markAsComplete = (index) => {
    all[index].completed = true
  }

  const overdue = () => {

    //checking the date and list overdue Items
    return all.filter((todoitem)=>{
      return todoitem.dueDate< formattedDate(new Date());
    });
}

  const dueToday = () => {
  
    // checking the date and list items that are due date today 
    return all.filter((todoitem)=>{
      return todoitem.dueDate=== formattedDate(new Date());
    });
  }

  const dueLater = () => {
  
    //checking the date and list items that are due date later 
    return all.filter((todoitem)=>{
      return todoitem.dueDate>formattedDate(new Date());
    });
  }

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list.map((todoitem)=>{
      const iscompleted=todoitem.completed ? "[x]":"[ ]";
     
      let date;
      if(todoitem.dueDate===formattedDate(new Date()))
      {
        date="";
      }
      else{
        date=todoitem.dueDate;
      }
      return `${iscompleted} ${todoitem.title.trim()} ${date}`.trim();

    })
    .join("\n");
  };

  return {
    all,
    add,
    markAsComplete,
    overdue,
    dueToday,
    dueLater,
    toDisplayableList
  };
};

// ####################################### #
// DO NOT CHANGE ANYTHING BELOW THIS LINE. #
// ####################################### #

const todos = todoList();

const formattedDate = d => {
  return d.toISOString().split("T")[0]
}

var dateToday = new Date()
const today = formattedDate(dateToday)
const yesterday = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() - 1))
)
const tomorrow = formattedDate(
  new Date(new Date().setDate(dateToday.getDate() + 1))
)

todos.add({ title: 'Submit assignment', dueDate: yesterday, completed: false })
todos.add({ title: 'Pay rent', dueDate: today, completed: true })
todos.add({ title: 'Service Vehicle', dueDate: today, completed: false })
todos.add({ title: 'File taxes', dueDate: tomorrow, completed: false })
todos.add({ title: 'Pay electric bill', dueDate: tomorrow, completed: false })

console.log("My Todo-list\n")

console.log("Overdue")
var overdues = todos.overdue()
var formattedOverdues = todos.toDisplayableList(overdues)
console.log(formattedOverdues)
console.log("\n")

console.log("Due Today")
let itemsDueToday = todos.dueToday()
let formattedItemsDueToday = todos.toDisplayableList(itemsDueToday)
console.log(formattedItemsDueToday)
console.log("\n")

console.log("Due Later")
let itemsDueLater = todos.dueLater()
let formattedItemsDueLater = todos.toDisplayableList(itemsDueLater)
console.log(formattedItemsDueLater)
console.log("\n\n")
module.exports=todoList;