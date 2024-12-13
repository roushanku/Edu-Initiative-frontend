// components/CustomIcons.tsx

import React from "react";

export const SitemarkIcon = () => {
  return (
    <svg
      width={86}
      height={19}
      viewBox="0 0 86 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-auto mr-2" // Tailwind classes for height and margin
    >
      <path
        fill="#B4C0D3"
        d="m.787 12.567 6.055-2.675 3.485 2.006.704 6.583-4.295-.035.634-4.577-.74-.422-3.625 2.817-2.218-3.697Z"
      />
      <path
        fill="#00D3AB"
        d="m10.714 11.616 5.352 3.908 2.112-3.767-4.295-1.725v-.845l4.295-1.76-2.112-3.732-5.352 3.908v4.013Z"
      />
      <path
        fill="#4876EF"
        d="m10.327 7.286.704-6.583-4.295.07.634 4.577-.74.422-3.66-2.816L.786 6.617l6.055 2.676 3.485-2.007Z"
      />
      <path
        fill="#4876EE"
        d="M32.507 8.804v6.167h2.312v-7.86h-3.366v1.693h1.054ZM32.435 6.006c.212.22.535.33.968.33.434 0 .751-.11.953-.33.213-.23.318-.516.318-.86 0-.354-.105-.641-.318-.86-.202-.23-.52-.345-.953-.345-.433 0-.756.115-.968.344-.202.22-.303.507-.303.86 0 .345.101.632.303.861ZM24.46 14.799c... (rest of the paths) ..."
      />
    </svg>
  );
};

export const FacebookIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.68 15... (rest of the path data) ..."
        fill="url(#paint0_linear_795_116)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_795_116"
          x1="8"
          y1="0"
          x2="8"
          y2="15."
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1AAFFF" />
          <stop offset="1" stopColor="#0163E0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const GoogleIcon = () => {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15... (rest of the path data) ..." fill="#4285F4" />
    </svg>
  );
};
