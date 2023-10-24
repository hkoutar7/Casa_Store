import "./../assets/styles/breadCrumb.css";

export default function BreadCrumb(props) {



    return (
        <>
        <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
            <li className="breadcrumb-item">
                <p onClick={props.onClick}>{props.sup_name}</p>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
                {
                    (props.name.length >= 30 ) ? `${props.name.slice(0,30)} ...` : props.name
                }
            </li>
            </ol>
        </nav>
        </>
    );
}
