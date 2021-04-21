import { h, Component, Fragment } from "preact";

export const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Month = (props) => {
  const month = props.month;
  const data = props.data;

  const allStarts = data.map((item) => new Date(item.start));
  const allDays = allStarts.map((dateAsString) => dateAsString.getDate());

  // Remove duplicated
  const uniqueDays = allDays.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });

  const allResources = data.map((item) => item.resource);
  // Remove duplicated
  const uniqueResources = allResources.filter((item, index, array) => {
    return array.indexOf(item) === index;
  });

  return (
    <table>
      <tr>{MONTHS[month]}</tr>
      <tr>
        <th>Resource</th>
        {uniqueDays.map((d) => {
          return <th>{d}</th>;
        })}
      </tr>
      {/* Listed resource as the number of rows */}
      {uniqueResources.map((resource) => {
        return (
          <tr>
            <td>{resource}</td>

            {/* Unique days as the number of columns */}
            {uniqueDays.map((dayAsNumber) => {
              // Find the matching entry in the data set
              const matchingEntry = data.find((item) => {
                const itemDate = new Date(item.start).getDate();
                const isSameDay = itemDate === dayAsNumber;
                const isSameResource = item.resource === resource;
                return isSameDay && isSameResource;
              });

              return <td>{matchingEntry ? matchingEntry.text : undefined}</td>;
            })}
          </tr>
        );
      })}
    </table>
  );
};

export default Month;
