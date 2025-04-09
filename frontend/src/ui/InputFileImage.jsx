import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import clsx from "clsx";

import { formatBytes } from "../utils/fileUtils";

import Button from "./Button";
import Image from "./Image";
import Label from "./Label";

/**
 * UI component to display a image upload input.
 *
 * @returns {JSX.Element}
 *
 */
const InputFileImage = ({
    name
}) =>
{
    const { t } = useTranslation(["buttons", "misc"]);

    const allowedFileTypes = ["image/png", "image/jpg", "image/jpeg"];

    const [isImageUploaded, setIsImageUploaded] = useState(false);
    const [imagePreviewSrc, setImagePreviewSrc] = useState("");
    const [imageName, setImageName] = useState("");
    const [imageSize, setImageSize] = useState(0);

    /**
     * Handles image upload and updates the preview.
     *
     * Validates the selected file, ensures it matches allowed types, and updates
     * the preview source. Deletes any previously uploaded image if no file is selected.
     *
     * @param {Event} event - The file input change event.
     *
     * @returns {void}
     *
     */
    const handleFileUpload = (event) =>
    {
        const image = event.target.files[0]

        if(!image)
        {
            deleteUploadedFile();
            return;
        }

        if(!allowedFileTypes.includes(image.type))
        {
            console.error("Invalid file type: ", image.type);
            return;
        }

        setImagePreviewSrc(URL.createObjectURL(image));

        setImageName(image.name);
        setImageSize(formatBytes(image.size));
        setIsImageUploaded(true);
    }

    /**
     * Deletes the image preview.
     *
     * @returns {void}
     *
     */
    const deleteUploadedFile = () =>
    {
        document.getElementById(name).value = "";

        setImagePreviewSrc("");
        setImageName("");
        setImageSize(0);
        setIsImageUploaded(false);

        URL.revokeObjectURL(imagePreviewSrc);
    }

    /**
     * Deletes the Blob object on unmount to prevent memory issues.
     */
    useEffect(() =>
    {
        return () =>
        {
            if(isImageUploaded)
                URL.revokeObjectURL(imagePreviewSrc)
        }
    }, [imagePreviewSrc])

    return (
        <div>
            <div
                onClick={() => document.getElementById(name).click()}
                className="relative hover:cursor-pointer"
            >
                <Image
                    src={imagePreviewSrc}
                    size={300}
                />

                <Label
                    forInput={name}
                    label={t("add_or_edit_an_image", { ns: "misc" })}
                    className={"absolute bottom-0 w-full py-2 rounded-b-md bg-black/50 text-white text-center"}
                />
            </div>

            {isImageUploaded &&
                <>
                    <p className="flex justify-between">
                        <span>{imageName}</span>

                        <span>{imageSize}</span>
                    </p>

                    <Button
                        label={t("delete_image", { ns: "buttons" })}
                        onClickFunction={deleteUploadedFile}
                        className={"mt-2"}
                    />
                </>
            }

            <input
                type="file"
                id={name}
                name={name}
                accept={allowedFileTypes.join(",")}
                onChange={handleFileUpload}
                className={"hidden"}
            />
        </div>
    )
}

export default InputFileImage;