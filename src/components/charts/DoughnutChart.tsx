import React, { useEffect } from "react";
// @ts-ignore
import CanvasJS from "@canvasjs/charts";

interface DoughnutChartProps {
  name: string,
  values: number[],
  color: string,
  unit: string,
  abr: string,
}

export const DoughnutChart : React.FC<DoughnutChartProps> = ({name, values, color, unit, abr}) => {

  useEffect(() => {
    const chart = new CanvasJS.Chart(`chart-${name}`, {
      animationDuration: 1000,
      animationEnabled: true,
      title: {
      },
      backgroundColor: "transparent",
      height: 210,
      data: [
        {
          type: 'doughnut',
          color: `${color}`,
          startAngle: -90,
          explodeOnClick: false,
          indexLabelFontColor: "white",
          dataPoints: [
            {y: values[values.length - 1], color: `${color}`, label: `${abr}`, exploded: true, 
            indexLabel: `{label} - ${values[values.length - 1]}${unit}`,},
            {y: 100 - values[values.length - 1], color: "#909090"},
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
