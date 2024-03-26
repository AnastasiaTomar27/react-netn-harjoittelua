const ClickEvent1 = () => {

    const handleClick = () => {
        console.log('Moi!');
    }

    return(
        <div className="divs">
            <h5>Function without paramater</h5>
            <button onClick={handleClick}>Paina</button>
        </div>
    );
}

export default ClickEvent1;
