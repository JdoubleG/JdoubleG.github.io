/* fade.js -- fades text elements in when the page loads.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  5/28/2018
 */

window.onload = function()
{
    $('#hometext h1').delay(0).animate({ opacity: 1 }, 700);​
    window.setTimeout(fadeDetails(), 1000);
}

function fadeDetails()
{
    $('#hometext p').delay(1000).animate({ opacity: 1 }, 700);​
}
