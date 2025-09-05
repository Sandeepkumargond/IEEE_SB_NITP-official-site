import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-6 mt-20">
      <div className="container mx-auto px-6 text-center space-y-4">
        <p>National Institute of Technology Patna, Bihar (800005), India</p>
        
        <div className="flex justify-center gap-6">
          <Link href="#">About IEEE</Link>
          <Link href="#">IEEE Renew</Link>
          <Link href="#">IEEE Xplore</Link>
          <Link href="#">IEEE Membership</Link>
        </div>

        <div className="flex justify-center gap-6">
          <FaGithub size={20} />
          <FaFacebook size={20} />
          <FaInstagram size={20} />
          <FaLinkedin size={20} />
        </div>

        <p className="text-sm">© 2024 IEEE SB NITP. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
