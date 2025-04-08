import itemsData from "../mocks/items.json";

/**
 * Gets all the items.
 *
 * @returns {Array}
 *
 */
export const getItems = async () =>
{
    try
    {
        // Uncomment below to use the real backend.
        /*
        const response = await fetch(`${process.env.BACKEND_URL}/`);

        if (!response.ok)
        {
            const error = await response.text();
            console.error(`${response.status} ${response.statusText} : ${error}`);
            return [];
        }

        return await response.json();
        */

        return itemsData;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
};

/**
 * Gets a item common by its ID.
 *
 * @returns {Object}
 *
 */
export const getItemCommon = async (itemCommonId) =>
    {
        try
        {
            // Uncomment below to use the real backend.
            /*
            const response = await fetch(`${process.env.BACKEND_URL}/`);

            if (!response.ok)
            {
                const error = await response.text();
                console.error(`${response.status} ${response.statusText} : ${error}`);
                return [];
            }

            return await response.json();
            */

            return itemsData.items_common.filter(itemCommon => itemCommon.id === itemCommonId)[0];
        }

        catch(error)
        {
            console.error(`Error while fetching data: ${error.message}`);
            return [];
        }
    };