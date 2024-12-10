import React, { useState } from "react";
import styles from "@/styles/Navbar.module.css";

interface SocialMedia {
  name: string;
  value: string;
  type: 'copy' | 'link' | 'pdf';
}

export default function Contact({ socialMedia }: { socialMedia: SocialMedia[] }) {
  const [copied, setCopied] = useState<string | null>(null);

  const handleClick = (social: SocialMedia) => {
    if (social.type === 'copy') {
      navigator.clipboard.writeText(social.value);
      setCopied(social.name);
      setTimeout(() => setCopied(null), 2000);
    } else if (social.type === 'link' || social.type === 'pdf') {
      window.open(social.value, '_blank');
    }
  };

  return (
    <div className="mt-5 pb-5">
      <h3 className="text-white mt-6 ml-4 mb-4 tracking-wide text-[12px]">
        CONTACT
      </h3>
      <div className="text-white flex flex-col space-y-3">
        {socialMedia.map((social, index) => (
          <button
            key={index}
            onClick={() => handleClick(social)}
            className={`ml-4 cursor-pointer text-xs text-left ${styles.tooltipButton}`}
            title={social.type === 'copy' ? social.value : undefined}
            aria-label={social.type === 'copy' ? `Copy ${social.name}: ${social.value}` : `Open ${social.name}`}
          >
            <p className={`hover:text-gray-400 inline ${copied === social.name ? 'text-green-500' : ''}`}>
              {social.name}
              {copied === social.name && <span className="ml-2">(Copiado!)</span>}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
