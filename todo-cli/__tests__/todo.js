/* eslint-disable no-unused-vars */
const todoList = require("../todo");

const { all, markAsComplete, add } = todoList();

describe("TodoList Test Suite", () => {
  beforeAll(() => {
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should add new todo", () => {
    const todoItemsCount = all.length;
    add({
      title: "Test todo",
      completed: false,
      dueDate: new Date().toLocaleDateString("en-CA"),
    });
  });
  test("Should mark a todo as complete", () => {
    expect(all[0].completed).toBe(false);
    markAsComplete(0);
    expect(all[0].completed).toBe(true);
  });
  test("Should retrieve overdue items", () => {
    const { overdue } = todoList();
    const overdueItems = overdue();
    expect(overdueItems.length).toBe(0);
  });
  test("Should retrieve items that are due today", () => {
    const { dueToday } = todoList();
    const todayItems = dueToday();
    expect(todayItems.length).toBe(0);
  });
  test("Should retrieve items that are due later", () => {
    const { dueLater } = todoList();
    const laterItems = dueLater();
    expect(laterItems.length).toBe(0);
  });
});
