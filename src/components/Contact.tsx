import { FC } from 'react';
import Image from 'next/image';

const Contact: FC = () => {
  return (
    <section className="py-20 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row lg:space-x-8">
          <div className="bg-white p-8 shadow-lg rounded-lg mb-8 lg:mb-0 lg:w-1/3">
            <div className="space-y-4 text-center">
            <div className="flex justify-center mb-4">
                <Image
                  src="/contact/location.svg"
                  alt="location"
                  width={60}
                  height={60}
                />
              </div>
              <p className='border-b pb-5'>
                 No 2A, Down Town Road No 7, Phum Kork Chamkar, Phnom Penh
              </p>
              <div className="flex justify-center mb-4">
                <Image
                  src="/contact/email.svg"
                  alt="location"
                  width={60}
                  height={60}
                />
              </div>

              <p className='border-b pb-5'>
                 info@medi.com
                 jycatry@medi.com
              </p>
              <div className="flex justify-center mb-4">
                <Image
                  src="/contact/phone.svg"
                  alt="location"
                  width={60}
                  height={60}
                />
              </div>
              <p >
                  052 804 122 <br />
                  (164) 333-0487
              </p>
            </div>
          </div>
          <div className="bg-white p-8 shadow-lg rounded-lg lg:w-2/3">
            <h3 className="text-2xl font-bold mb-4">Just Say Hello!</h3>
            <p className="mb-4">
              Do you fancy saying hi to me or you want to get started with your project and you need my help? Feel free to contact me.
            </p>
            <form>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="full-name">Full name</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" type="text" id="full-name" name="full-name" placeholder="example: John" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" type="email" id="email" name="email" placeholder="name@example.com" />
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="reason">Reason</label>
                  <select className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" id="reason" name="reason">
                    <option>Choose your reason</option>
                    <option>General Inquiry</option>
                    <option>Project Proposal</option>
                    <option>Support</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2" htmlFor="phone-number">Phone number</label>
                  <input className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" type="text" id="phone-number" name="phone-number" placeholder="+123 345 6789" />
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-2" htmlFor="message">Your message</label>
                <textarea className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-500" id="message" name="message" rows={4} placeholder="Hello!"></textarea>
              </div>
              <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
