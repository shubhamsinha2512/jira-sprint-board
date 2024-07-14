import React from "react";
import Column from "./Column";

const tickets = [
  {
    id: "ticket1",
    columnId: "todo",
    title: "Implement DND",
    description: "Kar ke dikhayenge",
    assignee: "shubham",
    status: "todo",
    storyPoint: 3,
    labels: "",
    priority: "",
  },
  {
    id: "ticket2",
    columnId: "in-progress",
    title: "Fix login issue",
    description: "Investigate and resolve login bug",
    assignee: "raj",
    status: "in-progress",
    storyPoint: 5,
    labels: "bug",
    priority: "high",
  },
  {
    id: "ticket3",
    columnId: "done",
    title: "Add new user registration",
    description: "Enable new user registrations",
    assignee: "priya",
    status: "done",
    storyPoint: 8,
    labels: "feature",
    priority: "medium",
  },
  {
    id: "ticket4",
    columnId: "todo",
    title: "Update user profile",
    description: "Allow users to update their profile",
    assignee: "shubham",
    status: "todo",
    storyPoint: 2,
    labels: "enhancement",
    priority: "low",
  },
  {
    id: "ticket5",
    columnId: "in-progress",
    title: "Optimize database queries",
    description: "Improve the performance of database queries",
    assignee: "neha",
    status: "in-progress",
    storyPoint: 5,
    labels: "performance",
    priority: "high",
  },
];

function ColumnContainer() {
  return (
    <div className="mt-6 grid h-full grid-cols-5">
      <Column label={"Todo"} tickets={tickets} />
      <Column label={"In Dev"} />
      <Column label={"Code Review"} />
      <Column label={"In QA"} />
      <Column label={"Released"} />
    </div>
  );
}

export default ColumnContainer;
