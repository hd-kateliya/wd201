/* eslint-disable no-undef */
const todoList = () => {
  all = [];
  const add = (todoItem) => {
    all.push(todoItem);
  };
  const markAsComplete = (index) => {
    all[index].completed = true;
  };

  const overdue = () => {
    //checking the date and list overdue Items
    return all.filter((todoitem) => {
      return todoitem.dueDate < formattedDate(new Date());
    });
  };

  const dueToday = () => {
    // checking the date and list items that are due date today
    return all.filter((todoitem) => {
      return todoitem.dueDate === formattedDate(new Date());
    });
  };

  const dueLater = () => {
    //checking the date and list items that are due date later
    return all.filter((todoitem) => {
      return todoitem.dueDate > formattedDate(new Date());
    });
  };

  const toDisplayableList = (list) => {
    // Format the To-Do list here, and return the output string
    // as per the format given above.
    return list
      .map((todoitem) => {
        const iscompleted = todoitem.completed ? "[x]" : "[ ]";

        let date;
        if (todoitem.dueDate === formattedDate(new Date())) {
          date = "";
        } else {
          date = todoitem.dueDate;
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
    toDisplayableList,
  };
};

module.exports = todoList;
