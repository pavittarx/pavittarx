import { useRouter } from "next/router";

import Logo from "@/_assets/icons/pavittarx.svg";

import styles from "./header.module.scss";
import header from "./header.json";

const Header = () => {
  const router = useRouter();

  const { links } = header;

  return (
    <>
      <header className={styles["header-ctr"]}>
        <div className={styles["logo-ctr"]} onClick={() => router.push("/")}>
          <Logo />
        </div>
        <div className={styles["nav-ctr"]}>
          {links &&
            links.length > 0 &&
            links.map((link, index) => {
              return (
                <div
                  key={"nav-link" + index}
                  className={styles["nav-link"]}
                  onClick={() => router.push(link.link)}
                >
                  {link.name}
                </div>
              );
            })}
        </div>
      </header>
    </>
  );
};

export default Header;
