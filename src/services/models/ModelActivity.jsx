export default class  ModelActivity {
	constructor(data) {
		this.sessions = data.sessions
	}

	getSessions() {
		return this.sessions
	}

	getDates() {
		const dates = this.sessions.map((session) => session.day)
		return dates
	}
}

// création d'une fonction qui va formatter les dates en fonction du format qui correspondqnt au graphe
export const tickFormatterDate = (tick) => {
	const date = new Date(tick)
	return date.getDate()
}
