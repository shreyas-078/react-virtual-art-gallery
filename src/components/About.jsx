export default function About() {
  return (
    <section>
      <h1 className="text-4xl font-cormorant text-center my-4">About Us</h1>
      <p className="text-center font-cormorant text-xl my-2">
        Founded with a passion for promoting creativity and fostering artistic
        connections, React Art Gallery is a virtual art gallery committed to
        showcasing exceptional talent. <br /> Our mission is to provide a
        platform for artists to share their stories and for art enthusiasts to
        experience the transformative power of visual expression.
      </p>
      <p className="text-center font-cormorant text-xl my-2">
        Have questions, comments, or collaboration inquiries? Reach out to
        us—we&apos;d love to hear from you!
      </p>
      <div className="flex flex-row gap-2 font-cormorant items-center justify-center text-xl my-2">
        <a
          href="https://github.com/shreyas-078"
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <img
            src="https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=GitHub&logoColor=white"
            alt="GitHub Badge"
          />
        </a>
        Github Repo for this Project
      </div>
      <div className="flex flex-row gap-2 font-cormorant items-center justify-center text-xl my-2">
        <a href="https://www.linkedin.com/in/shreyas-salankimatt-83588a260/">
          <img
            src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white"
            alt="LinkedIn Badge"
          />
        </a>
        Shreyas Salankimatt&lsquo; Linkedin
      </div>
      <div className="flex flex-row gap-2 font-cormorant items-center justify-center text-xl my-2">
        <a href="https://twitter.com/shreyas_078">
          <img
            src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white"
            alt="Twitter Badge"
          />
        </a>
        Shreyas Salankimatt&lsquo;s X/Twitter Profile
      </div>
    </section>
  );
}
