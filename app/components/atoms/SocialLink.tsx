interface SocialLinkProps {
  href: string;
  label: string;
  className?: string;
  showArrow?: boolean;
}

export default function SocialLink({
  href,
  label,
  className = "",
  showArrow = true,
}: SocialLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {label}
      {showArrow ? " ↗" : ""}
    </a>
  );
}
