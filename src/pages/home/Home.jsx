import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import { useEffect, useMemo } from "react";
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
      "Agu",
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
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyNmFlMmUwNDdlODAyNmVhYzRlMDE4OSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MTUwNjU2MSwiZXhwIjoxNjUxOTM4NTYxfQ.vA3yyVGNeVNVhvfIj1UoP5Hdcum0QtlAuGH3yha7ab4",
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
  }, [MONTHS]);
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}
