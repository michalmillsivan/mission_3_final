
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import TemporaryDrawer from './pages/root';
import MeetingsPage from './pages/meetings';
import CreateMeetingPage from './pages/createNewMeeting';

export const routes = [

  {
    lable:"create meeting",
    path: "create-meeting",
    element: <CreateMeetingPage />
  },

  {
    lable: "meetings",
    path: "meetings",
    element: <MeetingsPage />
  }
]




const router = createBrowserRouter([
  {
    path: "/",
    element: <TemporaryDrawer />,
    children: routes,
  },
]);





function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )

}

export default App

