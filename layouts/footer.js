const Footer = () => {
  return (
    <footer className="footer-container">
      <p>MIT License 2020 - Created By:</p>
      <a rel="noreferrer" color="white" href="https://github.com/DanielLvovsky">
        &nbsp;Daniel Lvovsky
      </a>
      <style jsx>
        {`
          footer {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            background: #ffff;
            color: #37323e;
            text-decoration: none;
          }
        `}
      </style>
    </footer>
  );
};

export default Footer;
