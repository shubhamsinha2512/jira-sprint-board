import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/RootLayout";
import SprintBoard from "./pages/SprintBoard";
import BoardListing from "./pages/BoardListing";
import TicketListing from "./pages/TicketListing";
import CreateBoard from "./pages/CreateBoard";
import CreateTicket from "./pages/CreateTicket";
import Board from "./pages/BoardView";
import TicketView from "./pages/TicketView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <SprintBoard />,
      },
      {
        path: "boards",
        children: [
          {
            index: true,
            element: <BoardListing />,
          },
          {
            path: "new",
            element: <CreateBoard />,
          },
          {
            path: ":boardId",
            element: <Board />,
          },
        ],
      },
      {
        path: "tickets",
        children: [
          {
            index: true,
            element: <TicketListing />,
          },
          {
            path: "new",
            element: <CreateTicket />,
          },
          {
            path: ":ticketId",
            element: <TicketView />,
          },
        ],
      },
    ],
  },
  {},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
