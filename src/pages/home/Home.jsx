import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo, useState } from "react";
import axios from "axios";

export default function Home() {
  const MONTHS = useMemo(
    () => [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    []
  );

  const [userStats, setUserStats] = useState([]);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await axios.get("/users/stats", {
          headers: {
            token:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmFlMmUwNDdlODAyNmVhYzRlMDE4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjgwOTYyNiwiZXhwIjoxNjUzMjQxNjI2fQ.M5y83tWL5b_Pyj9nNjbYtV8-HlKNeFqmUH5oOjYJkS",
          },
        });

        const statList = res.data.sort(function (a, b) {
          return a._id - b._id;
        });

        statList.map((item) =>
          setUserStats((prev) => [
            ...prev,
            { name: MONTHS[item._id], "New User": item.total },
          ])
        );
      } catch (err) {
        console.log(err);
      }
    };

    getStats();
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart data={userStats} title="User Analytics" grid dataKey="New User" />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
