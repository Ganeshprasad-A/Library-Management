export default function Display(props) {
    return (
        <div>
            <p>ID : {props._id}</p>
            <h4>TITLE : {props.title}</h4>
            <h5>AUTHOR : {props.author}</h5>
        </div>
    );
}