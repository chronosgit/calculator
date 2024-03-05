import switchToDark from "./switchToDark.js";
import switchToLight from "./switchToLight.js";

const changeCssVariables = () => {
    const rootEl = document.documentElement;
    const rootStyles = getComputedStyle(rootEl);

    const gray100 = rootStyles.getPropertyValue("--gray_100");
    const gray300 = rootStyles.getPropertyValue("--gray_300");
    const gray400 = rootStyles.getPropertyValue("--gray_400");
    const gray500 = rootStyles.getPropertyValue("--gray_500");
    const gray900 = rootStyles.getPropertyValue("--gray_900");

    const styles = { gray100, gray300, gray400, gray500, gray900 };

    const lightThemeBgColor = gray100;
    const curBgColor = rootStyles.getPropertyValue("--bg");

    if(curBgColor === lightThemeBgColor) {
        switchToDark(rootEl, styles)
    } else {
        switchToLight(rootEl, styles);
    }
};

const switchTheme = (e) => {
    changeCssVariables();
};

export default switchTheme;