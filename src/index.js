import "./style.css";
import { GridFormer } from "./js/grid/grid";
import goblinIcon from "./img/goblin.png";

const grid = new GridFormer(document.querySelector(".game-field"));
grid.create_game_grid();
const randomCell = grid.getRandomCell();

const img = document.createElement("img");
img.src = goblinIcon;
img.width = 90;
img.height = 90;

randomCell.appendChild(img);

setInterval(grid.moveImg.bind(grid, img), 1000);
