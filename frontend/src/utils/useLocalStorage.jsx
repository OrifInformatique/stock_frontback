import { useState } from "react";

/**
 * Utility to use localStorage.
 *
 * @param {string} keyName Name of the key of the localStorage entry.
 *
 * @param {any} defaultValue Default value of the localStorage entry. \
 * Defined if the entry doesn't exist in localStorage.
 *
 */
export const useLocalStorage = (keyName, defaultValue) =>
{
    const [storedValue, setStoredValue] = useState(() =>
    {
        try
        {
            const value = window.localStorage.getItem(keyName);

            if(value)
            {
                return JSON.parse(value);
            }

            else
            {
                window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
                return defaultValue;
            }
        }

        catch (err)
        {
            return defaultValue;
        }
    });

    const setValue = (newValue) =>
    {
        try
        {
            window.localStorage.setItem(keyName, JSON.stringify(newValue));
        }

        catch (err)
        {
            console.error(err);
        }

        setStoredValue(newValue);
    };

    return [storedValue, setValue];
};