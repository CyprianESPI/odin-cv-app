function Contact({ name, setName, email, setEmail, tel, setTel }) {
    function handleChange(callbackFunction) {
        return (event) => {
            const text = event.target.value;
            callbackFunction(text);
        };
    };

    return <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleChange(setName)} placeholder="John Smith" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" value={email} onChange={handleChange(setEmail)} placeholder="john.smith@gmail.com" />
        <label htmlFor="tel">Phone Number</label>
        <input id="tel" type="tel" value={tel} onChange={handleChange(setTel)} placeholder="0123456" />
    </div>;
}

export default Contact;