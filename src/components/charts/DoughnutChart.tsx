import React, { useEffect } from "react";
// @ts-ignore
import CanvasJS from "@canvasjs/charts";
import { useMetricsStore } from "../../store/MetricsStore";

interface DoughnutChartProps {
  name: string,
  values: number[],
  color: string,
  unit: string,
  abr: string,
}

export const DoughnutChart : React.FC<DoughnutChartProps> = ({name, values, color, unit, abr}) => {

  const {max} = useMetricsStore(state => state.ranges[name]);

  useEffect(() => {
    const chart = new CanvasJS.Chart(`chart-${name}`, {
      animationDuration: 1000,
      animationEnabled: true,
      title: {
      },
      backgroundColor: "transparent",
      height: 210,
      toolTip: {
        enabled: false
      },
      data: [
        {
          type: 'doughnut',
          color: `${color}`,
          startAngle: -90,
          explodeOnClick: false,
          indexLabelFontColor: "white",
          dataPoints: [
            {y: values[values.length - 1], color: `${color}`, label: `${abr}`, exploded: true, indexLabel: `{label} - ${values[values.length - 1]}${unit}`,},
            {y: max - values[values.length - 1], color: "#909090"},
          ],
        },
      ],
    });
    chart.render();
  }, []);

  return (
    <div id={`chart-${name}`}></div>
  )
}
