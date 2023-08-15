import './style.css';
import { HeaderContent } from './header.js';
import { HomeContent } from './home.js';
import { Footer } from './footer.js'

const pageLoad = function() {
    HeaderContent();
    HomeContent();
    Footer();
};

window.onload = pageLoad;


// Credits for images:
// 1. Image by KamranAydinov on Freepik
// 2. Image by drobotdean on Freepik
// 3. Image by Freepik on Freepik
// 4. Image by KamranAydinov on Freepik