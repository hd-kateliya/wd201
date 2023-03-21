/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
const todoList = require("../todo");
const { all, markAsComplete, add, overdue, dueToday, dueLater } = todoList();

describe("todo test suite", () => {
  beforeAll(() => {
    [
      {
        title: "Preparations for upcoming mid-sems",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() - 1))
          .toISOString()
          .split("T")[0],
      },
      {
        title: "Go to GameZone",
        completed: false,
        dueDate: new Date().toISOString().split("T")[0],
      },
      {
        title: "Go for routine body checkup",
        completed: false,
        dueDate: new Date(new Date().setDate(new Date().getDate() + 1))
          .toISOString()
          .split("T")[0],
      },
    ].forEach(add);
  });
  test("Add new todo", () => {
    expect(all.length).toEqual(3);
    add({
      title: "Phone Recharge",
      completed: false,
      dueDate: new Date().toISOString().split("T")[0],
    });
    expect(all.length).toEqual(4);
  });
  test("Mark as complete", () => {
    expect(all[0].completed).toEqual(false);
    markAsComplete(0);
    expect(all[0].completed).toEqual(true);
  });
  test("Retrieve Overdue todoItems", () => {
    expect(overdue().length).toEqual(1);
  });
  test("Retrieve Today todoItems", () => {
    expect(dueToday().length).toEqual(2);
  });
  test("Retrieve Due later todoItems", () => {
    expect(dueLater().length).toEqual(1);
  });
});
