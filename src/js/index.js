import Elm from '../elm/Main';
import app from '../ts/index.ts';

var mountNode = document.getElementById('elm-app');

var elmApp = Elm.Main.embed(mountNode);

app(elmApp);
