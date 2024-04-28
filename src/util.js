

const

	arrUniq = (array) => [...new Set(array)],

	/**
		 * genereate random integer  which is in < 0 ... (@array.length - 1) > range and not included in <excluded>
		 * @param array The sourse.
		 * @param excluded The array of indexses which need to filtered out.
		 * @param noRepLen The count of the elements returned in calls before, which can't be repeated in the result (max length of the @excluded).
		 *      If @noRepLen == 0 - then function return -1 when all elemnt's indexes was returned.
		 * @returns Random @array index or -1 if the no more elements to cycle.
	 */
	arrRandom = (array, excluded = [], noRepLen = 0) =>
	{
		// console.log(`arrRandom : excluded: [${excluded.join(',')}]`)

		let idx = null;

		if(array && array.length && (!(excluded && excluded.length) || excluded.length < array.length))
		{
			do
				idx = Math.round(Math.random() * (array.length - 1))
			while
				( excluded && excluded.includes(idx) );

			if(noRepLen && noRepLen < array.length)
				excluded.push(idx)

			if(noRepLen && excluded && excluded.length > noRepLen)
				excluded.splice(0, excluded.length - noRepLen);
		}

 		return idx === null ? null : {value: array[idx], index: idx, excluded: excluded};
	}

/**
 * Return new Generator which return a random element of the @array in a 'cycle', filtered to @noRepLen count of prior returned elements.
 * @param array The sourse.
 * @param noRepLen The count of the elements returned in calls before, which can't be repeated in the result (max length of the @excluded).
 *      If @noRepLen == 0 - then function return undefined when all @array elemnt's indexes was returned.
 * @returns A Generator which return random element of the @array or undefined if 'cycle' is done (@noRepLen == 0)
 *
 * A @param [integer | array of integers] in .next(@param) call - will be added to the @excluded (history) indexes for next generation
 * 
 */
function* genArrRandomCycler(array, noRepLen = 1)
{
	let val, history = [];

	do {
		val = arrRandom(array, history, noRepLen);
		yield val;
	}
	while (val)
}

function arrRandomCycler(array, noRepLen = 1)
{
	const g = genArrRandomCycler(array, noRepLen);

	return {
		next: () => g.next().value,
		array: array
	}
}

export {genArrRandomCycler, arrRandomCycler, arrRandom}

/*  * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *  */

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

