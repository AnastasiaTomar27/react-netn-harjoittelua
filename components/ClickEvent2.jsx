const ClickEvent2 = (name) => {

    const handleClick = (name) => {
        console.log('Moi ' + name + '!');
    }

    return(
        <div className="divs">
            <h5>Function with paramater</h5>
            <button onClick={() => {handleClick('Pekka')}}>Paina</button>
        </div>
    );
}

export default ClickEvent2;