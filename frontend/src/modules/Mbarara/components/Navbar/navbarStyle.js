const navbarStyle = {
    AdbIcon: { display: { xs: 'none', md: 'flex' }, mr: 1 },
    AdbIconHidden: { display: { xs: 'flex', md: 'none' }, mr: 1 },
    Typography: {
        mr: 2,
        display: { xs: 'none', md: 'flex' },
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    },
    TypographyHidden: {
        mr: 2,
        display: { xs: 'flex', md: 'none' },
        flexGrow: 1,
        fontFamily: 'monospace',
        fontWeight: 700,
        letterSpacing: '.3rem',
        color: 'inherit',
        textDecoration: 'none',
    },
    BoxHidden: { flexGrow: 1, display: { xs: 'flex', md: 'none' } },
    Box: { flexGrow: 1, display: { xs: 'none', md: 'flex' } },
    color: { background: "#F6F9FC" }
}

export default navbarStyle;

