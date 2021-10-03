import React from "react";

//component to show the hourly graph
function HourlyForecast(props) {
  return (
    <>
      <div>48 Hours Forecast</div>
      <table>
        <tr>
          <th>Hour</th>
          <th>Tempertaure</th>
          <th>Feels Like</th>
          <th>Winds</th>
        </tr>

        {props.data.map((hour) => {
          const imgUrl = `http://openweathermap.org/img/wn/${hour.weather[0].icon}@2x.png`;
          let time =
            new Date(hour.dt * 1000)
              .toLocaleString("en-US", { weekday: "long" })
              .substring(0, 3) +
            " " +
            new Date(hour.dt * 1000).toLocaleString("en-US", {
              hour: "numeric",
            });

          return (
            <tr>
              <td>{time}</td>
              <td>{hour.temp}&#176;C</td>
              <td>
                <span>{hour.weather[0].main}</span>
                <img src={imgUrl} alt="weather icon" />
              </td>
              <td>{hour.wind_speed}m/sec</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}

export default HourlyForecast;
