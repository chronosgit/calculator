const switchToDark = (rootEl, styles) => {
    if(!rootEl) return;

    const {
        gray100, gray200, gray300,
        gray400, gray500, gray600,
        gray700, gray800, gray900
    } = styles;

    rootEl.style.setProperty("--main", "white");
    rootEl.style.setProperty("--bg", gray900);
    rootEl.style.setProperty("--btn_primary", gray500);
    rootEl.style.setProperty("--btn_secondary", gray400);
    rootEl.style.setProperty("--theme_switch_cover_offset", "-2.65rem");
    rootEl.style.setProperty("--theme_switch_bg", gray500);
    rootEl.style.setProperty("--theme_switch_cover", gray400);
};

export default switchToDark;