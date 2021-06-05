

/* ############ ENSURE LINK ICONS DON'T WRAP ####################### */

function iconFix() {
    const servicesLinks = document.querySelectorAll("#serviceLink"); /* get the icons */
    const allLabels = document.querySelectorAll("#serviceLabel");  /* get the labels */
    for (var i = 0; i < servicesLinks.length; i++) { 
          const newSpan = document.createElement("span"); /* span to goes right after label text*/
          newSpan.setAttribute("id", "serviceLinkStyle");
          const newContent = document.createTextNode("\u00A0");
          newSpan.appendChild(newContent); 
          newSpan.appendChild(servicesLinks[i]);
          const tempLink = newSpan.cloneNode(true);
          servicesLinks[i].remove();
          allLabels[i].insertAdjacentElement('beforeend', tempLink); }
    }

/* ############## REMOVE LAST BORDER ################################# */

function removeLastBorder() {
    const servicesDivs = document.querySelectorAll(".inner-services-container");
    numOfDivs = servicesDivs.length -1;
    servicesDivs[numOfDivs].setAttribute("id", "removeBorder"); 

}

iconFix();
removeLastBorder()

