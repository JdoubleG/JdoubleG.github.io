/* hotkeys.js -- Alows for keyboard navigation of my personal website.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  5/20/2018 - 10/10/2020
 */

/* home
 * Redirects the user to the web page's home URL.  */
function home()
{
    window.location.href = '../index.html';
    console.log(home);
}

/* about
 * Redirects the user to the web page's about URL.  */
function about()
{
    window.location.href = '../about/index.html';
    console.log(about);
}

/* projects
 * Redirects the user to the web page's projects URL.  */
function projects()
{
    window.location.href = '../projects/index.html';
    console.log(projects);
}

/* links
 * Redirects the user to the web page's links URL.  */
function links()
{
    window.location.href = '../links/index.html';
    console.log(links);
}

/**** MAIN ********************************************************************/

document.addEventListener('keypress',
    /* processKey
     * Records which key is pressed on the keyboard and determines which helper
     * function to call.  */
    function processKey(event) {
        var code = event.key;
        console.log(code);
        if (code === 'h' || code ==='H')  home();
        else if (code === 'a' || code ==='A')  about();
        else if (code === 'p' || code ==='P')  projects();
        else if (code === 'l' || code ==='L')  links();
    }
);