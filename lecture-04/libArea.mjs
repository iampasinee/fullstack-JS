function areaTriangle(b,n){
    return (b * n) /2;
}
function areaCircle(r){
    return Math.PI * r *r;
}

function areaSqr(w, l){
    return w * l;
}

export {
    areaCircle, areaSqr, areaTriangle
};