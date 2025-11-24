import { InstagramLogoIcon, EnvelopeClosedIcon } from "@radix-ui/react-icons";

export function Footer() {
  const captainsEmails = [
    "grady.yu@yale.edu",
    "jack.yin@yale.edu",
    "steven.zhang.shz3@yale.edu",
  ];
  const emailLink = `mailto:${captainsEmails.join(",")}`;

  return (
    <footer className=" text-gray-800 py-2">
      <div className="max-w-[1000px] mx-auto flex flex-col md:flex-row justify-between items-center py-5 px-4">
        <div className="flex items-center gap-2">
          <img
            src="/favicon-light.svg"
            alt="Yale Badminton Club"
            className="h-8"
          />
          <span className="text-lg text-blue-900">Yale Club Badminton</span>
        </div>

        <div className="flex gap-6 mt-4 md:mt-0">
          <a
            href="https://www.instagram.com/yalebadminton/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600"
          >
            <InstagramLogoIcon className="w-5 h-5" />
          </a>
          <a href={emailLink} className="text-gray-800 hover:text-blue-600">
            <EnvelopeClosedIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-[10px] text-gray-400 max-w-[1000px] mx-auto px-4 pb-4">
        "Yale" and "Yale University" are registered trademarks of Yale
        University. This website is a student-run website and is maintained,
        hosted, and operated independently of Yale University. The activities on
        this website are not supervised or endorsed by Yale, and information
        contained on this website does not necessarily reflect the opinions or
        official positions of the University.
      </div>
    </footer>
  );
}
