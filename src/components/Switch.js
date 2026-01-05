export const Switch = ({ condition, cases, }) => {
    const match = cases.find(([cond]) => cond === condition);
    if (!match) {
        return null;
    }
    return match[1];
};
