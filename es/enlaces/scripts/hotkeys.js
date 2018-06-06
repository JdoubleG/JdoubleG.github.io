/* hotkeys.js -- Alows for keyboard navigation of my personal website.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  6/6/2018
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
    window.location.href = '../sobre/index.html';
    console.log(about);
}

/* projects
 * Redirects the user to the web page's projects URL.  */
function projects()
{
    window.location.href = '../proyectos/index.html';
    console.log(projects);
}

/* contact
 * Redirects the user to the web page's contact URL.  */
function contact()
{
    window.location.href = '../contactar/index.html';
    console.log(contact);
}

/**** MAIN ********************************************************************/

document.addEventListener('keypress',
    /* processKey
     * Records which key is pressed on the keyboard and determines which helper
     * function to call.  */
    function processKey(event) {
        var code = event.key;
        console.log(code);
        if (code === 'i' || code ==='I')  home();
        else if (code === 's' || code ==='S')  about();
        else if (code === 'p' || code ==='P')  projects();
        else if (code === 'c' || code ==='C')  contact();
    }
);