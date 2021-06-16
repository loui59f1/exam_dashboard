import { VictoryPie, VictoryLabel } from "victory";
import React from "react";

// let color1 = "#0a0a0a";
// let color2 = "#ebebeb";

// if (bartender.status === "WORKING") {
//   bgColorStatus = "#94ECE0";
// } else {
//   bgColorStatus = "#807EBE";
//   bartenderStatusDetail = "Ready";
// }

function StorageTapBeer({ tap }) {
  // Calculate the percentage of level in tap

  const percentage = (tap.level * 100) / tap.capacity;

  // Ternary operator
  // let percentageColor = percentage > 50 ? "#63c8ba" : percentage < 30 ? "#000000" : "#FF0000";

  let percentageColor;

  // Using if sentence to improve readability
  if (percentage > 50) {
    percentageColor = "#63c8ba";
  } else if (percentage > 20) {
    percentageColor = "#ffc85b";
  } else {
    percentageColor = "#ff6b2b";
  }

  return (
    <div className="storage_tap_beer">
      <h3>Tap {tap.id}</h3>
      <DiagramStorageData percentage={percentage} percentageColor={percentageColor} />
      <h3>{tap.beer}</h3>
    </div>
  );
}

class DiagramStorageData extends React.Component {
  render() {
    return (
      <div className="pie">
        <p className="percentage_text" style={{ color: this.props.percentageColor, filter: 'brightness(1.5)' }}>{this.props.percentage}%</p>
        <VictoryPie
          animate={{
            duration: 2000,
          }}
          padAngle={0}
          labelComponent={<VictoryLabel verticalanchor="middle" />}
          innerRadius={70}
          width={200}
          height={200}
          data={[
            { key: "", y: this.props.percentage },
            { key: "", y: 100 - this.props.percentage },
          ]}
          colorScale={[this.props.percentageColor, "rgba(238, 238, 238, 0.2)"]}
        />
      </div>
    );
  }
}

export default StorageTapBeer;
