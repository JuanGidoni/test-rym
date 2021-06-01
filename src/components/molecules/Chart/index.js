
import { PieChart } from 'react-minimal-pie-chart';
const Chart = ({ data }) => {
 return (
  <div className="card">
   <div className="text-center mb-3 d-flex align-items-center justify-content-center">
    { data && data.length > 0 ? data.map(
     (v, i) => (
      i === 0 ? <h2 style={{color: `${v.color}`}} key={i}>
      {v.title}
     </h2> : <h2 key={i}>
      /<strong style={{color: `${v.color}`}}>{v.title}</strong>
     </h2>
     )
    ) : 'Data not found...'
   }
   </div>
   <PieChart
    style={{
     fontFamily:
      '"Roboto", sans-serif',
     fontSize: '12px',
    }}
    data={data}
    radius={50}
    lineWidth={15}
    animate
    label={({ dataEntry }) => Math.round(dataEntry.percentage) + '%'}
    labelPosition={60}
    labelStyle={{
     fill: "#000",
     fontSize: '7px',
     fontFamily: 'sans-serif',
    }}
    paddingAngle={5}
   />
  </div>
 )
}

export default Chart
