import React, { useEffect } from 'react'
import { useNavigate } from "react-router-dom";

/**
 * Utility feature to redirect the user.
 *
 * @param {string} to Route where to redirect the user.
 *
 * @returns {void}
 *
 */
const Redirect = ({ to }) =>
{
    const navigate = useNavigate();

    useEffect(() => navigate(to));
}

export default Redirect;