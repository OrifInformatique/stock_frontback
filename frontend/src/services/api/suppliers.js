import suppliers from "../mocks/suppliers.json";

/**
 * Gets all existing suppliers.
 *
 * @return {Array<Object>} List of all suppliers.
 *
 */
export const getAllSuppliers = () =>
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

        return suppliers;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
}