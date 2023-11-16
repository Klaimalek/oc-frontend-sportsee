export default class PerformanceModel {
	constructor(data) {
		this.data = data.data
	}

	getData() {
		return this.data
	}
}

// Création d' une fonction getPerformanceDataValue qui va me permettre la récupération les valeurs de data.kind et data.value afin de pouvoir les utiliser dans le radar chart
export const getPerformanceDataValue = (data) => {
	let arrayData = []

	for (let i = 0; i < data.length; i++) {
		arrayData.push({
			kind: data[i].kind,
			A: data[i].value,
		})
	}

	// Récupération de  la valeur maximale de data.value pour l'utiliser dans le graphe radar-chart
	let maxDataValue = Math.max(...arrayData.map((item) => item.A))
	for (let j = 0; j < arrayData.length; j++) {
		// Je création d' une nouvelle propriété fullMark dans chaque objet de arrayData afin de pouvoir y stocker la valeur maximale de data.value
		arrayData[j].fullMark = maxDataValue
	}
	return arrayData
}