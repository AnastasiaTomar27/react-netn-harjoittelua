const ClickEvent3 = () => {

    const handleClick = (e) => {
        console.log('Moi!', e);
    }

    return(
        <div className="divs">
            <h5>Event Object</h5>
            <button onClick={handleClick}>Paina</button>
        </div>
    );
}

export default ClickEvent3;