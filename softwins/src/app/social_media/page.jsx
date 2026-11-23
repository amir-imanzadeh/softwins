"use client"
import { fileSenderForm } from "@/blocks/social_media/server_camponent";

export default function SocialMedia() {
    return (
        <form action={fileSenderForm}>
            {/* مهم: input باید name داشته باشد تا formData آن را بشناسد */}
            <input type="file" name="file" />
            <button type="submit">Submit</button>
        </form>
    )
}
