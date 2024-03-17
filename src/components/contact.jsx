function Contact({ name, onChange }) {
    const handleChange = event => {
        const text = event.target.value;
        onChange(text);
    };

    return <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={name} onChange={handleChange} placeholder="John Smith" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="tel">Phone Number</label>
        <input id="tel" type="tel" />
    </div>;
}

export default Contact;