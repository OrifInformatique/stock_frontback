/**
 * Defines the background color to use for a loan state tag.
 *
 * @param {string} loanState Value of the loan state.
 *
 * @returns {string|null} The color corresponding to the loan state.\
 * Returns null if the loan state is unknown.
 *
 */
export const setLoanTagColor = (loanState) =>
{
    switch(loanState)
    {
        case "Aucun prêt":
            return "bg-green-500"

        case "En prêt":
            return "bg-orange-500"

        case "En retard":
            return "bg-red-500"

        default:
            console.error("Unknown loan state value: ", loanState);
            return null;
    }
}

/**
 * Defines the background color to use for an item condition tag.
 *
 * @param {string} itemCondition Value of the item condition.
 *
 * @returns {string|null} The color corresponding to the item condition.\
 * Returns null if the item condition is unknown.
 *
 */
export const setConditionTagColor = (itemCondition) =>
{
    switch(itemCondition)
    {
        case "Fonctionnel":
            return "bg-green-500"

        case "À réparer":
            return "bg-orange-500"

        case "Indisponible":
            return "bg-red-500"

        default:
            console.error("Unknown item condition value: ", itemCondition);
            return null;
    }
}

/**
 * Defines the background color to use for an warranty state tag.
 *
 * @param {string} warrantyState Value of the warranty state.
 *
 * @returns {string|null} The color corresponding to the warranty state.\
 * Returns null if the warranty state is unknown.
 *
 */
export const setWarrantyTagColor = (warrantyState) =>
{
    switch(warrantyState)
    {
        case "En garantie":
            return "bg-green-500"

        case "Garantie expirée":
            return "bg-red-500"

        default:
            console.error("Unknown warranty state value: ", warrantyState);
            return null;
    }
}