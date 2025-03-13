import React, { useEffect, useState } from "react";

import Filters from "../modules/Filters";
import ItemsList from "../modules/ItemsList"

import Button from "../components/Button";
import InputText from "../components/InputText";
import Label from "../components/Label";
import Loading from "../components/Loading";
import MultiSelect from "../components/MultiSelect";
import NoResults from "../components/NoResults";
import SingleSelect from "../components/SingleSelect";
import Toggle from "../components/Toggle";

/**
 * Main page of the app. Default route ("/") leads to this page.
 *
 * @returns {JSX.Element}
 *
 */
const Home = () =>
{
    return (
        <>
            <Filters />

            <ItemsList />

            <Button label={"This is a button"} />

           <div>
                <Label forInput={"test-input-text"} label={"InputText Example"} inline={true} />

                <InputText name={"test-input-text"} defaultValue={"Test"} />
           </div>

            <Loading />

            <MultiSelect name={"test-multiselect"} options={["a", "b", "c", "d"]} defaultValues={["d"]}/>

            <NoResults />

            <SingleSelect name={"test"} options={["a", "b", "c", "d"]} defaultValue={"c"}/>

            <Toggle name={"test-toggle"} beforeLabelName={"ASC"} afterLabelName={"DESC"} />
        </>
    )
}

export default Home;