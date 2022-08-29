import { Fragment } from "react";

import JuicesSummary from "./JuicesSummary";
import AvailableJuices from "./AvailableJuices";

export default function Juices() {
  return (
    <Fragment>
      <JuicesSummary />
      <AvailableJuices />
    </Fragment>
  )
}