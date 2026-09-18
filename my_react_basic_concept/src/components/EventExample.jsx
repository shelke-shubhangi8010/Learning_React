const EventExample = () => {

    const showMessage = () => {
        alert("Button was Clicked");
    }

    const perametrize = (name3) => {

        alert("Hello my name is" + name3);
    }


    const handleInput = (event) => {

        console.clear();
        console.log("value : " + event.target.value);

    }

    const handleMouseOver = () => console.log("Mouse is Hover Text");

    const handleDblClick = () => console.log("mouse Double Click");


    return (

        <>

            { /* Event= onClick*/}
            <div className="container">
                <h1> Arrow Function Event Example</h1>
                <button className="btn btn-primary " onClick={() => alert("Hello Welcome")}> On click Inline</button>
            </div>

            <hr />

            <h1> On Click Function Calling</h1>
            <div className="container">
                <button className="btn btn-primary " onClick={showMessage}> On click Function call</button>
            </div>

            <hr />

            <h1>Perametarize Function</h1>

            <div className="container">

                <button className="btn btn-secondary " onClick={() => perametrize("Shubhangi")}> On click  perametarize Function call</button>


            </div>

            <hr />


            { /* Event= onChange*/}

            <div className="container">

                <input type="text" onChange={handleInput} placeholder="Enter Name" />

            </div>

            <hr />

            { /* Event= onMouseOver*/}

            <div className="container">

                <p onMouseOver={handleMouseOver} onDoubleClick={handleDblClick}> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, odio.</p>

            </div>
        </>

    )
};
export default EventExample