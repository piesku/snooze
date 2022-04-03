import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";

export function App(game: Game) {
    switch (game.PlayState) {
        case "title":
            return Title(game);
        case "playing":
            return Overlay(game);
        case "win":
            return Win(game);
        case "lose":
            return Lose(game);
        default:
            return "";
    }
}

export function Title(game: Game) {
    return html`
        <div
            style="
                padding: 1vmin;
                font-family: Helvetica, Arial, sans-serif;
                text-transform: uppercase;
                color: white;
            "
        >
            <div
                style="
                    font-size: 15vmin;
                    font-weight: 800;
                "
            >
                You are the snooze button.
                <button
                    onclick="$(${Action.GameStart})"
                    style="
                        font-size: 5vmin;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: white;
                        background: none;
                        padding: 1vmin 3vmin;
                        vertical-align: 4vmin;
                        border: 2vmin solid white;
                        border-radius: 50px;
                    "
                >
                    Let's go
                </button>
            </div>
        </div>
    `;
}

export function Overlay(game: Game) {
    return html`
        <div
            style="
                padding: 1vmin;
                font-family: Helvetica, Arial, sans-serif;
                text-transform: uppercase;
                color: white;
            "
        >
            <div
                style="
                    font-size: 15vmin;
                    font-weight: 800;
                "
            >
                Sleepiness: ${game.Sleepiness}
            </div>
        </div>
    `;
}

export function Win(game: Game) {
    return html`
        <div
            style="
                padding: 1vmin;
                font-family: Helvetica, Arial, sans-serif;
                text-transform: uppercase;
                color: white;
            "
        >
            <div
                style="
                    font-size: 15vmin;
                    font-weight: 800;
                "
            >
                You win! The human is awake.
                <button
                    onclick="$(${Action.GameTitle})"
                    style="
                        font-size: 5vmin;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: white;
                        background: none;
                        padding: 1vmin 3vmin;
                        vertical-align: 4vmin;
                        border: 2vmin solid white;
                        border-radius: 50px;
                    "
                >
                    Play again
                </button>
            </div>
        </div>
    `;
}

export function Lose(game: Game) {
    return html`
        <div
            style="
                padding: 1vmin;
                font-family: Helvetica, Arial, sans-serif;
                text-transform: uppercase;
                color: white;
            "
        >
            <div
                style="
                    font-size: 15vmin;
                    font-weight: 800;
                "
            >
                You lose! The human goes back to sleep.
                <button
                    onclick="$(${Action.GameTitle})"
                    style="
                        font-size: 5vmin;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: white;
                        background: none;
                        padding: 1vmin 3vmin;
                        vertical-align: 4vmin;
                        border: 2vmin solid white;
                        border-radius: 50px;
                    "
                >
                    Try again
                </button>
            </div>
        </div>
    `;
}
