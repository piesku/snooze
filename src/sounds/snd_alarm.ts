import {AudioClipKind, AudioSynthClip} from "../../common/audio.js";

export let snd_alarm: AudioSynthClip = {
    Kind: AudioClipKind.Synth,
    Tracks: [
        {
            Instrument: [
                8,
                "lowpass",
                11,
                3,
                true,
                "sine",
                10,
                3,
                [
                    ["sine", 8, 3, 4, 6, 8, false, false, 8, 8, 8],
                    ["sine", 8, 3, 5, 6, 11, false, false, 8, 8, 8],
                ],
            ],
            Notes: [57, 0, 0, 0, 57],
        },
    ],
    Exit: 0.4,
};
