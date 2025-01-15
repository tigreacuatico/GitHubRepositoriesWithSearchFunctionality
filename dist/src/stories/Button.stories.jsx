import Button from "../components/Button";
const buttonStory = {
    component: Button,
};
export default buttonStory;
export const WithIconAfter = {
    args: {
        label: "Button",
        icon: "IconStar",
        iconFirst: false,
    },
};
export const WithIconInFront = {
    args: {
        label: "Button",
        icon: "IconStar",
        iconFirst: true,
    },
};
export const NoIcon = {
    args: {
        label: "Button",
        icon: null,
        iconFirst: false,
    },
};
