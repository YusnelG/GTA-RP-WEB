import "../../styles/App.css";

export const Gallery = (props) => {

    const getURL = (event) => {
        console.log(event.target.style.width)
    }

    const gallery = "gallery-"

    return (
        <div className={gallery + props.id} onClick={getURL}>
        </div>
    );
}
