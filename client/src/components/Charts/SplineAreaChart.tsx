import React, { useEffect } from "react"

// @ts-ignore
import CanvasJS from "@canvasjs/charts";
import { generatePoints } from "../../helpers";

interface SplineAreaChartProps {
  name: string,
  values: number[],
  color: string,
  unit: string,
  abr: string,
}

export const SplineAreaChart : React.FC<SplineAreaChartProps> = ({name, values, color}) => {
  useEffect(() => {
    const chart = new CanvasJS.Chart(`chart-${name}`, {
      animationDuration: 1000,
      animationEnabled: true,
      title: {
      },
      axisX: {
        labelFontColor: "white",
        gridThickness: 1,
        minimum: 0,
        maximum: 9,
        interval: 1
      },
      axisY: {
        labelFontColor: "white"
      },
      backgroundColor: "transparent",
      height: 210,
      data: [
        {
          type: 'splineArea',
          color: `${color}`,
          explodeOnClick: false,
          indexLabelFontColor: "white",
          dataPoints: generatePoints(10, values, true),
        },
      ],
    });
    chart.render();
  }, []);

  return (
    <div id={`chart-${name}`}></div>
  )
}
