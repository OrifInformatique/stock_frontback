import stocking_places from "../mocks/stocking_places.json";

/**
 * Gets all existing stocking places.
 *
 * @return {Array<Object>} List of all stocking places.
 */
export const getAllStockingPlaces = () =>
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

        return stocking_places;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
}