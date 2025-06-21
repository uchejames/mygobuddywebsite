function contact() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-2">We would love to hear from you!</p>
      <p className="text-lg">Email: <a href="mailto:uchejamesjac@gmail.com" className="text-blue-500 hover:underline"></a></p>
      <p className="text-lg">Phone: <a href="tel:+2349031234567" className="text-blue-500 hover:underline">+234 903 123 4567</a></p>
        <p className="text-lg">Address: 123 Main Street, City, Country</p>
        <p className="text-lg">Follow us on social media:</p>
        <div className="flex space-x-4 mt-2">
          <a href="https://twitter.com/yourprofile" className="text-blue-500 hover:underline">Twitter</a>
          <a href="https://facebook.com/yourprofile" className="text-blue-500 hover:underline">Facebook</a>
          <a href="https://instagram.com/yourprofile" className="text-blue-500 hover:underline">Instagram</a>
            <a href="https://linkedin.com/in/yourprofile" className="text-blue-500 hover:underline">LinkedIn</a>
        </div>
      <p className="text-lg mt-4">We will get back to you as soon as possible!</p>
    </div>
  );        
}
export default contact;