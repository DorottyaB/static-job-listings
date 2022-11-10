const Footer = () => {
  const linkStyle = {
    textDecoration: 'none',
    color: 'hsl(180, 29%, 40%)',
  };
  return (
    <footer
      style={{
        gridArea: '5 / 1 / -1 / -1',
        padding: '10px',
        textAlign: 'center',
      }}
    >
      <div style={{ fontSize: '14px', color: 'hsl(180, 14%, 20%)' }}>
        Challenge by{' '}
        <a style={linkStyle} href='https://www.frontendmentor.io?ref=challenge'>
          Frontend Mentor
        </a>
        . Coded by{' '}
        <a style={linkStyle} href='https://github.com/DorottyaB'>
          Dorottya
        </a>
        .
      </div>
    </footer>
  );
};

export default Footer;
