import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <p className="text-lg text-center sm:text-left">
          Please visit <a href="/dashboard" className="text-blue-500 hover:underline">Dashboard</a> and <a href="/settings" className="text-blue-500 hover:underline">settings</a> page to view task.
        </p>
        <h1 className="text-5xl font-extrabold text-primary text-center sm:text-left">
          Assessment Yogita Singla
        </h1>
        <p className="text-lg text-secondary text-center sm:text-left">Full Stack Developer | 12+ years of experience</p>
        <div className="mt-6 space-y-4 sm:text-left">
          <div className="flex gap-4 justify-center sm:justify-start">
            <a href="tel:+918360492810" className="text-blue-500 hover:underline">+91(836)0492810</a>
            <a href="mailto:yogitasingla93@gmail.com" className="text-blue-500 hover:underline">yogitasingla93@gmail.com</a>
            <a href="https://linkedin.com/in/fullstackdeveloperyogita" className="text-blue-500 hover:underline">LinkedIn</a>
            <a href="https://github.com/yogitasingla93" className="text-blue-500 hover:underline">GitHub</a>
          </div>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Technical Skills</h2>
            <p className="text-lg text-gray-700 mt-2">
              Programming Languages: JavaScript, jQuery, HTML, CSS, PHP, JSON, AJAX, Node.js, React.js, Next.js (Beginner in C, C++, Python).
            </p>
            <p className="text-lg text-gray-700 mt-2">
              Libraries and Tools: Git, GitHub, Bitbucket, Docker, CI/CD pipelines, React, CommerceV3, WordPress, Kalio, Silverpop, Figma, HubSpot, Shopify, ZohoCommerce, SEMrush, Gulp.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Work Experience</h2>
            <div className="space-y-4 mt-4">
              <div>
                <h3 className="font-semibold text-xl">WordPress Developer - Measured, Texas, US</h3>
                <p className="text-gray-700 text-lg">October, 2023 - November, 2024</p>
                <ul className="list-disc list-inside text-lg mt-2">
                  <li>Maintaining, creating, and updating landing pages and functionalities on the WordPress site.</li>
                  <li>Improved website health to 98% from 78% using SEMrush and ahrefs.</li>
                  <li>Reduced page load speed from 3.5s to 0.7s using optimization tools.</li>
                  <li>Integrated Clearbit with HubSpot to increase form submissions by 20%.</li>
                  <li>Containerized WordPress using CI/CD pipelines and Docker.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl">Software Developer - Gardensalive, Lawrenceberg, US</h3>
                <p className="text-gray-700 text-lg">February, 2018 - February, 2022</p>
                <ul className="list-disc list-inside text-lg mt-2">
                  <li>Streamlined website functionality by integrating 3rd-party APIs, boosting conversion rate by 20%.</li>
                  <li>Conducted tests to optimize website sales, increasing revenue by 3X during COVID.</li>
                  <li>Worked on the CommerceV3 platform using Smarty PHP, JavaScript, CSS, and jQuery.</li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-xl">Web Administrator - Gardensalive, Lawrenceberg, US</h3>
                <p className="text-gray-700 text-lg">July, 2013 - February, 2018</p>
                <ul className="list-disc list-inside text-lg mt-2">
                  <li>Managed bulk email campaigns and optimized segmentation across multiple platforms.</li>
                  <li>Pioneered responsive email design, leading to a significant revenue increase.</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Certifications</h2>
            <ul className="list-disc list-inside text-lg mt-2">
              <li>Data Structures and Algorithms in JavaScript - Freecodecamp (Sept 2023 - Feb 2024)</li>
              <li>PHP MySQL - Multiplesystems Mohali, Punjab, India (2014)</li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Education</h2>
            <p className="text-lg text-gray-700 mt-2">Bachelor's in Computer Applications - Sikkim Manipal University, Mohali, Punjab, India (July 2011 - Sept 2014)</p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Projects</h2>
            <ul className="list-disc list-inside text-lg mt-2">
            <li><a href="https://www.measured.com/" className="text-blue-500 hover:underline">Measured Website - Homepage, FAQ, product pages redesign </a></li>
              <li><a href="https://www.measured.com/upcoming-events/" className="text-blue-500 hover:underline">Measured Website - Upcoming Events</a></li>
              <li><a href="https://www.brecksgifts.com/" className="text-blue-500 hover:underline">Breck’s Gifts Website Redesign</a></li>
              <li><a href="https://bitsandpiecesuk.co.uk/" className="text-blue-500 hover:underline">Cart and Sale Prices Optimization</a></li>
            </ul>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Leadership</h2>
            <p className="text-lg text-gray-700 mt-2">
              Led an MLM team for Forever Living Products, generating approximately Rs 2,400,000 in monthly revenue since August 2018.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold">Hobbies</h2>
            <ul className="list-disc list-inside text-lg mt-2">
              <li>Reading (Power of Subconscious Mind, Think and Grow Rich, Eat That Frog)</li>
              <li>Painting and Exercising</li>
            </ul>
          </section>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
