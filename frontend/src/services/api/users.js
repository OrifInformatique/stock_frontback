import eventsData from "../mocks/users.json";

/**
 * Gets all the users.
 *
 * @returns {Array<Object>}
 *
 */
export const getUsers = async () => {
    try {
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

        return eventsData;
    } catch (error) {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
};
