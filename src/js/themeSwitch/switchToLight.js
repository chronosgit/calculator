const switchToLight = (rootEl, styles) => {
    if(!rootEl) return;

    const {
        gray100, gray200, gray300,
        gray400, gray500, gray600,
        gray700, gray800, gray900
    } = styles;

    rootEl.style.setProperty("--main", "black");
    rootEl.style.setProperty("--bg", gray100);
    rootEl.style.setProperty("--btn_primary", gray300);
    rootEl.style.setProperty("--btn_secondary", "white");
    rootEl.style.setProperty("--theme_switch_cover_offset", "-0.25rem");
    rootEl.style.setProperty("--theme_switch_bg", "white");
    rootEl.style.setProperty("--theme_switch_cover", gray300);
};

export default switchToLight;