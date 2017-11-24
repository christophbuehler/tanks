import { Game } from './game';
import { Ui } from './ui';

window.oncontextmenu = event => {
    event.preventDefault();
    event.stopPropagation();
    return false;
};

window.onload = function() {
    new Ui();
}
