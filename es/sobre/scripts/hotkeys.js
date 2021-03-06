/* hotkeys.js -- Alows for keyboard navigation of my personal website.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  6/6/2018 - 6/9/2018
 */

/* home
 * Redirects the user to the web page's home URL.  */
function home()
{
    window.location.href = '../index.html';
    console.log(home);
}

/* projects
 * Redirects the user to the web page's projects URL.  */
function projects()
{
    window.location.href = '../proyectos/index.html';
    console.log(projects);
}

/* links
 * Redirects the user to the web page's links URL.  */
function links()
{
    window.location.href = '../enlaces/index.html';
    console.log(links);
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
        else if (code === 'p' || code ==='P')  projects();
        else if (code === 'e' || code ==='E')  links();
        else if (code === 'c' || code ==='C')  contact();
    }
);