
export default async function docs_pages({params}) {
    let {docs_pages} = await params;
    return(
        <>
        {docs_pages}
        </>)
}