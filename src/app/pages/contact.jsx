function contact() {
  return (
    <section className="h-screen px-4">
      <div className="flex flex-col p-6 h-full justify-center">
        <div className="mb-12">
          <span className="text-4xl md:text-6xl font-bold">
            Contact Me<span className="text-primary">.</span>
          </span>
          <p className="text-lg py-4 leading-6 md:text-4xl font-lancelot">
            We’re here to help and answer any question you might have.We look
            forward to hearing from you.
          </p>
        </div>
        <div className="flex flex-col">
          <form onSubmit={null} className="py-2">
            <label htmlFor="first name" className="block text-2xl md:text-4xl">
              First Name
            </label>
            <input
              type="text"
              name="name"
              className="my-2 p-4 w-full border border-primary bg-transparent rounded"
            />
            <label htmlFor="last name" className="block text-2xl md:text-4xl">
              Last Name
            </label>
            <input
              type="text"
              name="last name"
              className="my-2 p-4 w-full border border-primary bg-transparent rounded"
            />
            <label htmlFor="email" className="block text-2xl md:text-4xl">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="my-2 p-4 w-full border border-primary bg-transparent rounded"
            />
            <label htmlFor="message" className="block text-2xl md:text-4xl">
              Message
            </label>
            <textarea
              name="message"
              rows="5"
              className="my-2 w-full border border-primary bg-transparent rounded"
            ></textarea>
            <div className="flex justify-center my-8">
              <button
                type="submit"
                className="border border-primary text-2xl md:text-4xl px-6 py-2 rounded text-center"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default contact;
