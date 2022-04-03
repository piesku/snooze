import {html} from "../../common/html.js";
import {Action} from "../actions.js";
import {Game} from "../game.js";

export function App(game: Game) {
    switch (game.PlayState) {
        case "title":
            return Title(game);
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
                        font-size: 10vmin;
                        font-weight: 800;
                        text-transform: uppercase;
                        color: white;
                        background: none;
                        padding: 5px 20px;
                        border: 10px solid white;
                        border-radius: 50px;
                    "
                >
                    Let's go
                </button>
            </div>
        </div>
    `;
}
