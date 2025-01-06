import React, {useRef, useState} from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

    const formRef = useRef();
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({ name: '', email: '', message: '' });

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value });
    };

    //service_4zpcr8q

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        try {
            await emailjs.send(
                'service_4zpcr8q',
                'template_r7rz00o',
                {
                    from_name: form.name,
                    to_name: 'Jaime Nguyen',
                    from_email: form.email,
                    to_email: 'jaimenguyen168@gmail',
                    message: form.message,
                },
                'YoL41ioADBtUvo8bq'
            )

            alert('Thank you. I will get back to you as soon as possible.')
            setForm({ name: '', email: '', message: '' })
        } catch (error) {
            console.log(error)
            alert('Something went wrong.')
        } finally {
            setLoading(false)
        }
    }

    return (
        <section className="c-space my-20" id="contact">
            <div className="relative min-h-screen flex flex-col items-center justify-center">
                <img
                    src="/assets/terminal.png"
                    alt="terminal background"
                    className="absolute inset-0 min-h-screen"
                />

                <div className="contact-container">
                    <h3 className="head-text">Let&apos;s discuss</h3>
                    <p className="text-lg text-white-600 mt-3">Whether you&apos;re looking to create a cutting-edge mobile app, enhance your existing platform, or bring a unique idea to life, I’m here to make it happen.</p>

                    <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col space-y-7">
                        <label className="space-y-3">
                            <span className="field-label">Full Name</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="John Doe"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Email address</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className="field-input"
                                placeholder="johndoe@gmail.com"
                            />
                        </label>

                        <label className="space-y-3">
                            <span className="field-label">Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="field-input"
                                placeholder="Hi. Would you care to schedule a job interview with us?"
                            />
                        </label>

                        <button className="field-btn" type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}

                            <img src="/assets/arrow-up.png" alt="arrow-up" className="field-btn_arrow"/>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact
