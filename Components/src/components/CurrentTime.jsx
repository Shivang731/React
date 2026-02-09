function CurrentTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    const date = now.toLocaleDateString();

return (

    <div className="Time">
        <h1>{time}</h1>
        <p> {Date}</p>
    
    </div>

);
}