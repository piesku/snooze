import {AudioClipKind, AudioSynthClip} from "../../common/audio.js";
import {element} from "../../common/random.js";

export function snd_piano(): AudioSynthClip {
    return {
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
                    [
                        ["sine", 8, 4, 4, 5, 8, false, false, 8, 8, 8],
                        [false, 2, 2, 2, 4],
                        ["sine", 5, 0, 2, 3, 11, false, false, 8, 8, 8],
                    ],
                ],
                Notes: [element([53, 55, 57, 59, 60])],
            },
        ],
        Exit: element([0.2, 0.2, 0.2, 0.4]),
        Next: snd_piano,
    };
}
