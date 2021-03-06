import React from "react";
import { ResponsivePie } from "@nivo/pie";

const Pie = ({ data }) => (
  <ResponsivePie
    data={data}
    margin={{ top: 30, right: 60, bottom: 30, left: 60 }}
    innerRadius={0.5}
    padAngle={0.7}
    cornerRadius={3}
    colors={{ scheme: "nivo" }}
    borderWidth={1}
    borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
    radialLabelsSkipAngle={10}
    radialLabelsTextXOffset={6}
    radialLabelsTextColor='#333333'
    radialLabelsLinkOffset={0}
    radialLabelsLinkDiagonalLength={16}
    radialLabelsLinkHorizontalLength={24}
    radialLabelsLinkStrokeWidth={1}
    radialLabelsLinkColor={{ from: "color" }}
    slicesLabelsSkipAngle={10}
    slicesLabelsTextColor='#333333'
    animate={true}
    motionStiffness={90}
    motionDamping={15}
  />
);

export default Pie;
