/* fade.js -- fades text elements in when the page loads.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  5/28/2018
 */

window.onload = function()
{
    document.getElementById("hometext").children[0].className += " load";
    window.setTimeout(fadeDetails(), 1000);
}

function fadeDetails()
{
    document.getElementById("hometext").children[1].className += " load";
}
