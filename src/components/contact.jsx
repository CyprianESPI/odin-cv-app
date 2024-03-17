import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    console.log("Contact:", this);

    return <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="John Smith" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="tel">Phone Number</label>
        <input id="tel" type="tel" />
    </div>;
}

export default Contact;