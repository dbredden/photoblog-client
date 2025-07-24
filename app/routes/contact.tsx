import { useState } from "react";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        note: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // Handle backend request here
    };

    return (
        <div className="max-w-md mx-auto my-20 p-6 backdrop-blur-md rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">Contact Us</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-white mb-1">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-1">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="you@example.com"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="note" className="block text-sm font-medium text-white mb-1">Note</label>
                    <textarea
                        id="note"
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-4 py-2 border border-white rounded-md bg-transparent text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Write your message..."
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Send Message
                </button>
            </form>
        </div>
    );
}
