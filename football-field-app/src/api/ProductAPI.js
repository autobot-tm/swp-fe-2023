import { FAKE_PRODUCT_LIST } from "./fake-data";

const getAll = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(FAKE_PRODUCT_LIST);
        }, 250);
    })
};
export default {
    getAll,
};
