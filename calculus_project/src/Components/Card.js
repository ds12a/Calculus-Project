export default function Card(props) {
    return (
        <div data-aos="flip-left" className={"bg-white rounded-lg shadow m-1 p-4 border-solid " + props.className}>
            {props.children}
        </div>
    );
}