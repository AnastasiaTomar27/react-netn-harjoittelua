const ClickEvent4 = () => {
    const handleClick = (e) => {
        console.log(e.target);
        console.log(e.timeStamp)
    }
    return (
        <div className="divs">
            <h5>Target ja timeStamp Event  objects</h5>
            <button onClick={(e) => {handleClick(e)}}>Paina</button>
        </div>
    );
}
 
export default ClickEvent4;