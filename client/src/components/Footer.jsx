function Footer() {
  return (
    <footer className="bg-primary border-t-4 border-secondary py-6 mt-12">
      <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between text-light font-poppins">
        <p className="text-sm select-none">
          &copy; {new Date().getFullYear()} MyGoBuddy. All rights reserved.
        </p>

        {/* Future social icons placeholder */}
        {/* <div className="flex space-x-4 mt-3 sm:mt-0">
          <a href="#" aria-label="Facebook" className="hover:text-secondary transition-colors text-light">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.99 3.66 9.12 8.44 9.88v-6.99h-2.54v-2.89h2.54v-2.2c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.63.77-1.63 1.56v1.87h2.78l-.44 2.89h-2.34v6.99C18.34 21.12 22 16.99 22 12z" />
            </svg>
          </a>
          {/* Add more icons here */}
        {/* </div> */}
      </div>
    </footer>
  );
}

export default Footer;
