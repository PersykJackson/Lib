export const If = ({ condition, Else = null, children }) => {
    return condition ? children : Else;
};
