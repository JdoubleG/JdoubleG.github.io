/* ie.js -- Checks to see if the user is using Internet Explorer, Edge, or some
 *          other browser that uses either Trident or EdgeHTML as its rendering
 *          engine. These browsers do not display JamesGG.net correctly with
 *          consistency.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  6/6/2018 - 6/9/2018
 */

 if (navigator.appName == 'Microsoft Internet Explorer' ||
     navigator.appVersion.indexOf('Trident') > -1 ||
     navigator.appVersion.indexOf('Edge') > -1) {
     alert('JamesGG.net no offrece apoyo completamente de Microsoft Internet Explorer o Edge. El usando de estos navegadores para ver esta pagina web puede resulta en errores.');
 }