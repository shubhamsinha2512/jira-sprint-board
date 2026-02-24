import React from "react";
import Column from "./Column";
import { IBoard, ITicket, IUpdateTicketStatus } from "../interface/interfaces";
import { moveTicket } from "../redux/boardSlice/boardsSlice";
import { setActiveBoardId } from "../redux/boardSlice/activeBoardSlice";
import { DragDropContext } from "react-beautiful-dnd";
import { useDispatch } from "react-redux";

function ColumnContainer({ board }) {
  const dispatch = useDispatch();
  //Segregate tickets
  const currentBoard: IBoard = { ...board };
  const columnWiseGroupedTickets = currentBoard.columns.map((column) => {
    return {
      columnId: column.id,
      columnName: column.name,
      tickets: currentBoard.tickets.filter(
        (ticket) => ticket.status === column.id,
      ),
    };
  });

  const handleDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    const ticket: ITicket = currentBoard.tickets.find(
      (ticket) => ticket.id === draggableId,
    ) as ITicket;

    if (destination !== source) {
      const moveEvent: IUpdateTicketStatus = {
        boardId: currentBoard.id,
        ticketId: ticket.id,
        currentTicketStatus: source.droppableId,
        nextTicketStatus: destination.droppableId,
      };

      dispatch(moveTicket(moveEvent));
    }
  };

  return (
    <div className="mt-6 grid h-full grid-cols-5">
      <DragDropContext onDragEnd={handleDragEnd}>
        {columnWiseGroupedTickets &&
          columnWiseGroupedTickets.map((columnData) => (
            <Column
              key={columnData.columnId}
              columnId={columnData.columnId}
              label={columnData.columnName}
              tickets={columnData.tickets}
            />
          ))}
      </DragDropContext>
    </div>
  );
}

export default ColumnContainer;
