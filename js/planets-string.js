(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray = planetsString.split('|');
    var planetsJoined = planetsArray.join('<br>');

    planetsArray.unshift('<ul>');
    var planetUl = planetsArray.join('</li><li>');
    planetsArray.push('</ul>');
    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */
document.write(planetUl);
    // console.log(planetsArray);
    // console.log(planetsJoined);
    // console.log(planetUlnew);
    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */


})();
