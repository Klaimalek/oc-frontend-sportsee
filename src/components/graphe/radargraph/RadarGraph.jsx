import React, { useEffect, useState } from 'react';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer
} from 'recharts';
import './radargraph.css';
import {  } from '../../../services/models/ModelPerformance';
import { useParams } from 'react-router-dom';
import { getDataPerformance } from '../../../services/FetchData';
import { getPerformanceDataValue} from '../../../services/models/ModelPerformance'



function RadarGraph() {
  const [performance, setPerformance] = useState();
  const { userId } = useParams();
  const fetchData = async () => {
    try {
      const sessionsResponse = await getDataPerformance(userId);
      if (sessionsResponse.errorCode === 'ERR_NETWORK') {
        console.log('error');
      }
      setPerformance((prevState) => ({
        ...prevState,
        main: sessionsResponse,
      }));

    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  // création d' une fonction getKind qui va me permettre de récupérer les valeurs de kind dans data, les traduire en français pour le graphique et mettre dans le bon ordre pour le graphique

if(performance!==undefined){
 var data=[]
 var  performanceDataAll = performance.main?.getData()

 // Je vérifie que performanceDataAll est bien rempli
 if (performanceDataAll) {
  data = getPerformanceDataValue(performanceDataAll)
  var getKind = (data) => {
		let kind = data.kind
		//
		switch (kind) {
			case 1:
				return 'Intensité'
			case 2:
				return 'Vitesse'
			case 3:
				return 'Force'
			case 4:
				return 'Endurance'
			case 5:
				return 'Energie'
			case 6:
				return 'Cardio'
			default:
				return 'Valeur inconnue'
		}
   
	}

}

}

    

if(performance !== undefined){
  return (
    <div className="radar-chart">
    <ResponsiveContainer width='100%' height='100%'>
      <RadarChart
        cx="50%"
        cy="50%"
        outerRadius="75%"
        width={300}
        height={300}
        data={data}
      >
        <PolarGrid radialLines={false} />
        <PolarAngleAxis
          dataKey={getKind}
          tickSize={10}
          tick={{
            fill: 'white',
            fontSize: 13,
            fontWeight: 600,
            y: 200,
          }}
        />
        <PolarRadiusAxis axisLine={false} tick={false} />
        <Radar  dataKey="A" fill="#FF0101" fillOpacity={0.6} />
      </RadarChart>
      </ResponsiveContainer>
    </div>
  );
        }
}

export default RadarGraph;
