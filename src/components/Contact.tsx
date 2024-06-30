import { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    reason: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', form);
  };

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-green-600 mb-8">Just Say Hello!</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p>
              <strong>Address:</strong><br />
              No.2A, Down Town Road No.7, Korx Chamkak Village, Phnom Penh.
            </p>
            <p>
              <strong>Email:</strong><br />
              info@gmail.com<br />
              jworaty@gmail.com
            </p>
            <p>
              <strong>Phone:</strong><br />
              098 203 122<br />
              (084) 313-0347
            </p>
          </div>
          <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="name">Full Name</label>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="example: John"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="email">Email</label>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="name@example.com"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="reason">Reason</label>
              <select
                className="w-full mt-2 p-2 border rounded-lg"
                id="reason"
                name="reason"
                value={form.reason}
                onChange={handleChange}
                required
              >
                <option value="">Choose your reason</option>
                <option value="feedback">Feedback</option>
                <option value="support">Support</option>
                <option value="inquiry">Inquiry</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="phone">Phone Number</label>
              <input
                className="w-full mt-2 p-2 border rounded-lg"
                type="text"
                id="phone"
                name="phone"
                value={form.phone}
                onChange={handleChange}
                placeholder="+123 345 6789"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700" htmlFor="message">Your Message</label>
              <textarea
                className="w-full mt-2 p-2 border rounded-lg"
                id="message"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Hello!"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
