import Link from "next/link";
function HeaderLink({ text, link, active }) {
  return (
    <div>
      <Link href={link} as={link}>
        <a className={`header-link ${active || ""}`}> {text}</a>
      </Link>
    </div>
  );
}

export default HeaderLink;
