import { Row, Col } from "react-bootstrap"
import Chart from "../../molecules/Chart"
import calculate from "../../utils/calculate"
const ChartList = ({characters}) => {
 const speciesCalculate = calculate(characters.results, "species", "human")
 const statusCalculate = calculate(characters.results, "status", "alive")
 return (
  <Row>
   <Col md={6}>
    <Chart data={[
     {
      value: speciesCalculate.firstValue, color: "#68ca01", title: "Humans"
     },
     {
      value: speciesCalculate.secondValue, color: "grey", title: "Others"
     },
    ]} />
   </Col>
   <Col md={6}>
    <Chart data={[
     {
      value: statusCalculate.firstValue, color: "#68ca01", title: "Alive"
     },
     {
      value: statusCalculate.secondValue, color: "#dc3545", title: "Dead"
     },
    ]} />
   </Col>
  </Row>
 )
}

export default ChartList