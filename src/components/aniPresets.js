import {arrIdxRandomCycler, arrRandomCycler} from "@/util";

const

	aniPresetDefDuration = 2.345,

	aniPresetDefState = { opacity: 1, scale: 1, rotate: '0deg', x: 0, y: 0, z: 0},

	aniPresets = {

			fade: { opacity: 0 },
			zoomOut: { scale: 0 },
			zoomIn: { scale: 3 },
			rotateRight: { rotate: '360deg' },
			rotateLeft: { rotate: '-360deg' },


			// FadeZoom: {
			// 	initial: { opacity: 0, scale: 5, rotate: '0deg', x: 0, y: 0, z: 0},
			// 	animate: { opacity: 1, scale: 1,  rotate: '0deg' ,  transition: {duration: crossfadeDuration, easings: easeIn}},
			// 	// exit:  { opacity: 0, scale: 5, rotate: '0deg', transition: {duration: crossfadeDuration * 0.75, easings: easeOut,  delay: crossfadeDuration * 0.25  }}
			// 	exit:  { opacity: 0, scale: 5, rotate: '0deg', transition: {duration: crossfadeDuration, easings: easeOut }}
			// },

			// fadeZoom: {
			// 	initial: { opacity: 0, scale: 3,  rotate: '0deg'},
			// 	animate: { opacity: 1, scale: 1,  rotate: '0deg' ,  transition: {duration: crossfadeDuration, easings: easeIn}},
			// 	exit:  { opacity: 0, scale: 0.1, rotate: '0deg', transition: {duration: crossfadeDuration * 0.75, easings: easeOut,  delay: crossfadeDuration * 0.25  }}
			// },

			// zoomFade: {
			// 	initial: { opacity: 0, scale: 0.1,  rotate: '0deg'},
			// 	animate: { opacity: 1, scale: 1,  rotate: '0deg' ,  transition: {duration: crossfadeDuration, easings: easeIn}},
			// 	exit:  { opacity: 0, scale: 4, rotate: '0deg', transition: {duration: crossfadeDuration * 0.75, easings: easeOut,  delay: crossfadeDuration * 0.25  }}
			// },

			// fadeRotate: {
			// 	initial: { opacity: 0, scale: 1,  rotate: '360deg'},
			// 	animate: { opacity: 1, scale: 1,  rotate: '0deg' ,  transition: {duration: crossfadeDuration, easings: easeIn}},
			// 	exit:  { opacity: 0, scale: 1, rotate: '+360deg', transition: {duration: crossfadeDuration * 0.75, easings: easeOut,  delay: crossfadeDuration * 0.25  }}
			// },

		// {
		// 	transformOrigin: '50% 50%',
		// 	height: '70%',
		// 	top: "15%",
		// 	y: "0%",
		// 	rotateX: '0deg',
		// 	scale: 1,
		// }

		},

	aniPresetsKeys = Object.keys(aniPresets),

	aniPresetsCyclers = new Map([ ['def', arrRandomCycler(aniPresetsKeys, Math.min(aniPresetsKeys.length, 3))] ]),

	randomAniPreset = (mode = 'in', group = 'def', filter = [], noRepLen = 3, duration = aniPresetDefDuration) => {

		if(!aniPresetsCyclers.has(group))
			aniPresetsCyclers.set(
				group,
				arrRandomCycler(aniPresetsKeys.filter(k => !filter || filter.includes(k)), noRepLen)
		);

		const
			apc = aniPresetsCyclers.get(group),
			ap = {...aniPresetDefState, ...aniPresets[ apc.next().value ]}

		// ap.transition = {duration: duration, easings: mode == 'in' ? 'easeIn' : 'easeOut'}

		return ap
	},

	randomAniRec = (group = 'def', filter = [], noRepLen = 3, duration = aniPresetDefDuration) => ({

		animate: {transition: {duration: duration, easings:  'easeIn'}, ...aniPresetDefState},

		initial: randomAniPreset('in', group, filter, noRepLen, duration),

		exit: {transition: {duration: duration, easings: 'easeOut'},  ...randomAniPreset('out', group, filter, noRepLen, duration)}
	})


export  {randomAniRec, randomAniPreset, aniPresetsCyclers, aniPresets, aniPresetDefDuration, aniPresetsKeys, aniPresetDefState}