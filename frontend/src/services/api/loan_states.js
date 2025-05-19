import loan_states from "../mocks/loan_states.json";

/**
 * Gets all existing loan states.
 *
 * @return {Array<Object>} List of all loan states.
 */
export const getAllLoanStates = () =>
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

        return loan_states;
    }

    catch(error)
    {
        console.error(`Error while fetching data: ${error.message}`);
        return [];
    }
}