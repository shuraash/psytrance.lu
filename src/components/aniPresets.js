import {arrIdxRandomCycler, arrRandomCycler} from "@/util";

const

	aniPresetDefDuration = 2.345,

	aniPresetDefState = { opacity: 1, scale: 1, rotate: '0deg', x: 0, y: 0, z: 0},

	aniPresets = {
			fade: { opacity: 0 },
			ZoomOut: { scale: 0, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .33}} },
			zoomIn: { scale: 3, opacity: 0, transition: {scale: {delay: aniPresetDefDuration * .33}} },
			rotateRight: { rotate: '360deg' },
			rotateLeft: { rotate: '-360deg' },
			slideRight: { x: '100%',  transition: {duration: aniPresetDefDuration *.66}},
			slideLeft: { x: '-100%', transition: {duration: aniPresetDefDuration *.66}},
		},

	aniPresetsKeys = Object.keys(aniPresets),

	aniPresetsCombine = (pin, pout, din = aniPresetDefDuration, dout = aniPresetDefDuration, pdef = {...aniPresetDefState}) => ({

		animate: {...aniPresetDefState, transition: {duration: din, easings:  'easeIn', ...(pin.transition ? pin.transition : {})}},

		initial: {...aniPresetDefState, ...pin},

		exit: {...aniPresetDefState, ...pout, transition: {duration: dout, easings:  'easeOut',...(pout.transition ? pout.transition : {})}},
	})

export  {aniPresetsCombine, aniPresets, aniPresetDefDuration, aniPresetsKeys, aniPresetDefState}