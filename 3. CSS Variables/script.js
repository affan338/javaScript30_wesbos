const headLine2 = document.querySelector('.line-2');

const spacingRange = document.querySelector('.spacing-range');
const blurRange = document.querySelector('.blur-range');
const baseColor = document.querySelector('.base-color');

const imgPadding = document.querySelector('.image');

const handleColor = (e) => {
    const color = e.target.value;
    headLine2.style.color = color;
    imgPadding.style.backgroundColor = color;
}

baseColor.addEventListener('change', handleColor);

const handleSpacing = (e) => {
    const spacing = e.target.value;
    imgPadding.style.padding = spacing + "px";
}

spacingRange.addEventListener('change', handleSpacing);
spacingRange.addEventListener('mousemove', handleSpacing);

const handleBlur = (e) => {
    const blur = e.target.value;
    //document.documentElement.style.setProperty('--blur', blur + "px");
    imgPadding.style.filter = `blur(${blur}px)`;
    console.log();
}

blurRange.addEventListener('change', handleBlur);
blurRange.addEventListener('mousemove', handleBlur);

const load = () => {
    const color = baseColor.value;
    console.log(color);
    headLine2.style.color = color;
    imgPadding.style.backgroundColor = color;
};
load();