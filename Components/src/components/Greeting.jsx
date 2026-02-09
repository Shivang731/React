function Greeting() {
    const name  = "Alice";
    const  date = new Date().getHours();
    const greeting = time<12 ? "Good morning": "Good evening ";

    return (
        <div>
            <h1> {greeting}, {name}</h1>
            <p> Welcome back </p>
        </div>
    );
}

