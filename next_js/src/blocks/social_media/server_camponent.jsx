"use server"

export async function fileSenderForm(formData) {
    // 1. همه کلیدهای موجود در formData را لاگ کن
    console.log("Keys in formData:", Array.from(formData.keys()));
    
    // 2. سعی کن مقدار را بگیری
    const file = formData.get("file");
    
    console.log("Value of 'file':", file);
    
    if (file && file.size > 0) {
        const response = await fetch("http://coreactor-node:3010/code-review",{
            method:"post",
            body:file
        });
        console.log(await response.text())
    } else {
        console.log("No file was found in the field 'file'");
    }
}
