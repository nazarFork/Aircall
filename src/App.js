import ReactGridLayout from "react-grid-layout";
import Footer from "./layout/footer/Footer";
import Availability from "./pages/availability/Availability";
import CallList from "./pages/call-list/CallList";
import CallsToday from "./pages/calls-today/CallsToday";
import RightNow from "./pages/right-now";
import Today from "./pages/today/Today";
import TotalCalls from "./pages/total-calls/TotalCalls";
import "./App.css";
import "./css/tailwind.css";

function App() {

  const layout = [
    { i: "a", x: 0, y: 0, w: 1, h: 2 },
    { i: "b", x: 1, y: 0, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "c", x: 2, y: 0, w: 1, h: 2 },
    { i: "d", x: 3, y: 0, w: 1, h: 2 },
    { i: "e", x: 0, y: 300, w: 1, h: 2, minW: 2, maxW: 4 },
    { i: "f", x: 1, y: 300, w: 3, h: 2 },
  ];

  return (
    <ReactGridLayout
      className="layout text-current h-max w-full"
      layout={layout}
      cols={4}
      rowHeight={240}
      width={1900}
      style={{ backgroundColor: 'rgb(22 17 53)', color: 'lightgrey' }}
    >
        <div key="a"> <RightNow /> </div>
        <div key="b"> <TotalCalls /> </div>
        <div key="c"> <CallsToday /> </div>
        <div key="d"> <Availability /> </div>
        <div key="e"> <Today /> </div>
        <div key="f"> <CallList /> </div>
        <Footer />
    </ReactGridLayout>
  );
}

export default App;
