function Mendchilgee(){//punkts compenent props gui}
return <h1>hello</h1>;
}
function Mendchilgee123(props){//punkts compenenet propstoi}
return <h1> {props.ner} </h1>;
}
function Mendchilgee456(props){//punkts compenenet propstoi olon html render-lne}
return (
    <div>
        <h1> {props.ner} </h1>
<h2> {props.ner} </h2>

    </div>
)
}
function EtsegComp(props){
    return(
        <div>
            <Mendchilgee/>
            <Mendchilgee123 ner={props.ner}/>
            <Mendchilgee456 ner={props.ner} nas={props.nas}/>
            <table>
                <tr><td> {props.angi[0]} </td></tr>
                <tr><td> {props.angi[1]} </td></tr>
                <tr><td> {props.angi[2]} </td></tr>
            </table>
        </div>
    )
}
ReactDOM.render(
    <EtsegComp ner="james" nas="25" angi={['PX','MC','HBBMC']}/>,
    document.getElementById('root')
);
