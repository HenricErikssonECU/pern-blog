import { useRecoilState } from "recoil";
import { blogPostDataState, viewState } from "../states";




function InfoView(){

    const [view, setView] = useRecoilState(viewState);
    const [data, setData] = useRecoilState(blogPostDataState);


    return <>
        <h1> InfoView </h1>
        <div>
            <button onClick={() => setView('list')}>tillbaka</button>
            <div>Id: {data.id}</div>
            <div>Title: {data.title}</div>
            <div>Description: {data.description}</div>
            <div>Created: {data.createdDate}</div>
        </div>
    </>
}
 

export { InfoView };