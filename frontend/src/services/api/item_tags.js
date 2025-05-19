import item_tags from "../mocks/item_tags.json";

/**
 * Gets all existing object types.
 *
 * @return {Array<Object>} List of all object types.
 *
 */
export const getAllObjectTypes = () =>
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

        return item_tags;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
}