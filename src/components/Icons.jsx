// Fun, colorful SVG icons for the desktop

export const PortfolioIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="15" width="60" height="70" rx="8" fill="url(#portfolioGradient)" />
    <rect x="25" y="25" width="50" height="8" rx="4" fill="#6366f1" opacity="0.8" />
    <rect x="25" y="40" width="40" height="6" rx="3" fill="#6366f1" opacity="0.6" />
    <rect x="25" y="52" width="45" height="6" rx="3" fill="#6366f1" opacity="0.6" />
    <circle cx="70" cy="70" r="12" fill="#10b981" />
    <path d="M65 70 L68 73 L75 66" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    <defs>
      <linearGradient id="portfolioGradient" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#6366f1" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
    </defs>
  </svg>
);

export const BlogsIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="15" y="20" width="70" height="65" rx="6" fill="url(#blogsGradient)" />
    <path d="M25 35 L75 35" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
    <path d="M25 50 L60 50" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
    <path d="M25 65 L55 65" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" />
    <circle cx="80" cy="30" r="8" fill="#f59e0b" />
    <path d="M77 30 L79 32 L83 28" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <defs>
      <linearGradient id="blogsGradient" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#ec4899" />
        <stop offset="100%" stopColor="#f472b6" />
      </linearGradient>
    </defs>
  </svg>
);

export const ResumeIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="10" width="60" height="80" rx="4" fill="url(#resumeGradient)" />
    <rect x="25" y="20" width="50" height="5" rx="2.5" fill="#3b82f6" />
    <rect x="25" y="32" width="45" height="4" rx="2" fill="#3b82f6" opacity="0.7" />
    <rect x="25" y="42" width="40" height="4" rx="2" fill="#3b82f6" opacity="0.7" />
    <rect x="25" y="55" width="50" height="5" rx="2.5" fill="#3b82f6" />
    <rect x="25" y="67" width="45" height="4" rx="2" fill="#3b82f6" opacity="0.7" />
    <circle cx="75" cy="75" r="10" fill="#10b981" />
    <path d="M70 75 L73 78 L80 71" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" />
    <defs>
      <linearGradient id="resumeGradient" x1="0" y1="0" x2="100" y2="100">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#60a5fa" />
      </linearGradient>
    </defs>
  </svg>
);

export const SocialIcon = ({ className = "w-10 h-10" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="30" cy="30" r="12" fill="#10b981" />
    <circle cx="70" cy="30" r="12" fill="#3b82f6" />
    <circle cx="50" cy="70" r="12" fill="#f59e0b" />
    <path d="M30 30 L50 70" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
    <path d="M70 30 L50 70" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
    <path d="M30 30 L70 30" stroke="#6366f1" strokeWidth="3" strokeLinecap="round" />
    <circle cx="30" cy="30" r="6" fill="white" />
    <circle cx="70" cy="30" r="6" fill="white" />
    <circle cx="50" cy="70" r="6" fill="white" />
  </svg>
);

export const GitHubIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="#1a1a1a" />
    <path d="M35 50 C35 45, 40 40, 50 40 C60 40, 65 45, 65 50 C65 55, 60 60, 50 60 C40 60, 35 55, 35 50" 
      fill="#10b981" />
    <path d="M40 50 L60 50 M50 40 L50 60" stroke="white" strokeWidth="3" strokeLinecap="round" />
    <circle cx="50" cy="50" r="8" fill="#6366f1" />
  </svg>
);

export const LinkedInIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="20" y="20" width="60" height="60" rx="8" fill="#0a66c2" />
    <rect x="30" y="35" width="15" height="25" rx="2" fill="white" />
    <circle cx="37.5" cy="28" r="5" fill="white" />
    <rect x="50" y="35" width="20" height="5" rx="2.5" fill="white" />
    <rect x="50" y="45" width="25" height="5" rx="2.5" fill="white" opacity="0.8" />
    <rect x="50" y="55" width="20" height="5" rx="2.5" fill="white" opacity="0.8" />
  </svg>
);

export const TwitterIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="40" fill="#1da1f2" />
    <path d="M35 45 L50 60 L65 35" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    <circle cx="35" cy="35" r="3" fill="white" />
    <circle cx="65" cy="65" r="3" fill="white" />
  </svg>
);

