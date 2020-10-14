/* ie.js -- Checks to see if the user is using Internet Explorer, Edge, or some
 *          other browser that uses either Trident or EdgeHTML as its rendering
 *          engine. These browsers do not display JamesGG.net correctly with
 *          consistency.
 *
 * Written by:  James Garijo-Garde
 *         for: Exclusive personal use
 *         on:  5/24/2018
 */

 if (navigator.appName == 'Microsoft Internet Explorer' || navigator.appVersion.indexOf('Trident') > -1 || navigator.appVersion.indexOf('Edge') > -1) {
    alert('JamesGG.net does not offer full support of Microsoft Internet Explorer or Edge. Using these browsers to view this website may result in page items being displayed incorrectly.');
 }