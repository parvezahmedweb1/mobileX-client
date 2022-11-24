const Blogs = () => {
  return (
    <section className="mt-6 mb-20">
      <div className="container mx-auto">
        <h2 className="text-4xl text-gray-700 font-bold mb-10">Blogs</h2>
        {/*  */}
        <div className="space-y-4">
          <details
            className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4"
            open
          >
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                What are the different ways to manage a state in a React
                application?
              </h2>
              <span className="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45 text-hLink"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter. <br />
              There are four main types of state you need to properly manage in
              your React apps: <br />
              <li>Local state</li>
              <li>Global state</li>
              <li>Server state</li>
              <li>URL state</li>
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                How does prototypical inheritance work?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. The Prototypal Inheritance is a feature in
              javascript used to add methods and properties in objects. It is a
              method by which an object can inherit the properties and methods
              of another object. Traditionally, in order to get and set the
              [[Prototype]] of an object, we use Object. getPrototypeOf and
              Object
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                What is Unit Testing?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              In computer programming, unit testing is a software testing method
              by which individual units of source code—sets of one or more
              computer program modules together with associated control data,
              usage procedures, and operating procedures—are tested to determine
              whether they are fit for use.
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                Why should we write Unit Testing?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Unit testing is a powerful tool for software quality -- and has
              been for decades. Unit tests provide a fundamental check that an
              application meets its software design specifications and behaves
              as intended. When done well, unit tests:
              <br />
              <li>
                decrease defects and expose them early in the development
                lifecycle;
              </li>
              <li>increase code readability;</li>
              <li>enable code reuse;</li>
              <li>improve deployment velocity.</li>
            </p>
          </details>
          <details className="group border-l-2 border-r-2 border-link rounded-xl bg-gray-50 p-4">
            <summary className="flex cursor-pointer items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-700">
                React VS Angular VS Vue?
              </h2>
              <span className="ml-1.5 flex-shrink-0 text-hLink rounded-full bg-white p-1.5 text-btnHover sm:p-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 flex-shrink-0 transition duration-300 group-open:-rotate-45"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </summary>

            <p className="mt-4 leading-relaxed text-gray-600">
              Angular vs. React vs. Vue is one of primary choices in every web
              development process. The frontend framework you select influences
              almost everything: speed, and, therefore, cost of development,
              compatibility with other technologies, app speed and performance,
              and so on. The variety of technology available is enormous. That’s
              why we’ve decided to prepare a series of articles comparing the
              most popular technologies for different purposes. We’re starting
              with frontend frameworks because they are responsible for what
              users see in their browser.
            </p>
          </details>
        </div>
        {/*  */}
      </div>
    </section>
  );
};

export default Blogs;
