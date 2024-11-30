import styles from '@/styles/Header.module.css';

interface HeaderProps {
  id?: string;
}

const Header: React.FC<HeaderProps> = ({ id }) => {
  return (
    <header id={id}>
      <div className={`${styles.titleMain} pb-14 lg:pb-36`}>
        <p>I develop precise, engaging, and accessible digital experiences.</p>
      </div>
      <div className="text-white">
        <hr className="my-1 lg:my-3" />
        <p className="text-lg font-medium lg:text-base">
          Some Projects I Have Created
        </p>
      </div>
    </header>
  );
};

export default Header;
