import groups from "../mocks/groups.json";

/**
 * Gets all existing groups.
 *
 * @return {Array<Object>} List of all groups.
 *
 */
export const getAllGroups = () =>
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

        return groups;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
}