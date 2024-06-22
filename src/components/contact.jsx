import { APP_MODES } from "../App";

function Contact({mode, name, setName, email, setEmail, tel, setTel }) {
    function handleChange(callbackFunction) {
        return (event) => {
            const text = event.target.value;
            callbackFunction(text);
        };
    };

    switch(mode) {
        case APP_MODES[0]:
            return <section>
                <h2>Contact</h2>
                <div style={{display:"flex", justifyContent:"space-around", flexWrap:"wrap"}}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input id="name" type="text" value={name} onChange={handleChange(setName)} placeholder="John Smith" />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" value={email} onChange={handleChange(setEmail)} placeholder="john.smith@gmail.com" />
                    </div>
                    <div>
                        <label htmlFor="tel">Phone Number</label>
                        <input id="tel" type="tel" value={tel} onChange={handleChange(setTel)} placeholder="0123456" />
                    </div>
                </div>
            </section>;
        case APP_MODES[1]:
            return <section>
                <h2>Contact</h2>
                <div style={{display:"flex", justifyContent: "space-between"}}>
                <p>{name}</p>
                <p>{email}</p>
                <p>{tel}</p>
            </div>
            </section>;
    }
}

export default Contact;