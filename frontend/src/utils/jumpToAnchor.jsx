/**
 * Smoothly scrolls to a specified anchor in the page.
 *
 * @param {string} anchor
 *
 * @returns {void}
 */
export const jumpToAnchor = (anchor) =>
{
    const element = document.getElementById(anchor);

    if(element)
        element.scrollIntoView({ behavior: "smooth", block: "start" });

    else
        console.error(`Anchor "${anchor}" not found.`);
};