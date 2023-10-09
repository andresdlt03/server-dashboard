import React, { useEffect } from "react"
// @ts-ignore
import CanvasJS from "@canvasjs/charts"

import { generatePoints } from "../../helpers"

interface HomeChartProps {
  name: string,
  values: number[],
  color: string
}



export const HomeChart : React.FC<HomeChartProps> = ({name, values, color}) => {



  useEffect(() => {
  const chart = new CanvasJS.Chart(`chart-${name}`, {
    title: {},
    backgroundColor: "transparent",
    height: 80,
    axisX: {
      lineThickness: 0,
      gridThickness: 0,
      tickThickness: 0,
      labelFormatter: () => ""
    },
    axisY: {
      lineThickness: 0,
      gridThickness: 0,
      tickThickness: 0,
      labelFormatter: () => ""
    },
    toolTip: {
      enabled: false
    },
    data: [
      {
        type: 'spline',
        color: `${color}`,
        dataPoints: generatePoints(5, values, true),
      },
    ],
  });
    chart.render();
  }, [values]);

  return (
    <div>
      <div id={`chart-${name}`} />
    </div>
  )
}
