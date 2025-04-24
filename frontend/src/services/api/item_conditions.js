import item_conditions from "../mocks/item_conditions.json";

/**
 * Gets all existing item conditions.
 *
 * @return {Array<Object>} List of all item conditions.
 */
export const getAllItemConditions = () =>
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

        return item_conditions;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
}