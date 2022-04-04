import {AudioClipKind, AudioSynthClip} from "../../common/audio.js";

export let snd_piano: AudioSynthClip = {
    Kind: AudioClipKind.Synth,
    Tracks: [
        {
            Instrument: [
                8,
                false,
                8,
                8,
                false,
                false,
                8,
                8,
                [["sine", 8, 4, 4, 5, 8, false, false, 8, 8, 8]],
            ],
            Notes: [72],
        },
    ],
    Exit: 0.4,
};
