



export const formatTS = (t) => {
	const
		h = Math.floor(t / 3600),
		m = Math.floor((t - h * 3600) / 60),
		s = Math.floor(t - (h * 3600 + m * 60))
	return `${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
}

// formatTSD = (s) =>
// {
// 	let t = (new Date(0));
// 	t.setHours(0);
// 	t.setSeconds(s);
// 	return t.toLocaleTimeString()
// }


export const randomIndex = (elements, excluded = [], cycle = 0) =>
{
	let x = null;

	if(elements && elements.length)
	{
		if(excluded && excluded.length && elements.length <= excluded.length)

			return cycle
					? randomIndex(elements, excluded.splice(0, excluded.length - cycle))
					: null


		while ((x = Math.round(Math.random() * (elements.length - 1))) && (excluded && excluded.includes(x))) ;
		excluded.push(x)
	}

	return x;
}


export function* randoArrGen(elements, cycle = 1) {

	const history = []; let idx;

	do
	{
		idx = randomIndex(elements, history, cycle);
		yield isNaN(idx) ? null : elements[idx]

	} while (!isNaN(idx))
}



export function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array
}