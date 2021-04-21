import { h, Component, Fragment } from "preact";
import Modal from "react-modal";
import OrderItem from "./OrderItem";
import data from "./data";
import Month from "./Month";

const App = () => {
  const allStarts = data.map((item) => new Date(item.start));
  const months = allStarts.map((startDate) => startDate.getMonth());

  // Remove duplicated
  const uniqueMonths = months.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });

  return (
    <div id="app">
      {uniqueMonths.map((monthAsNumber) => (
        <Month month={monthAsNumber} data={data} />
      ))}
    </div>
  );
};

export default App;
