import Link from "next/link";
function HeaderLink({ text }) {
  return (
    <div>
      <Link href="register" as="path">
        <a className="header-link"> {text}</a>
      </Link>
    </div>
  );
}

export default HeaderLink;
