var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function createCar(manufacturer, modelName, options) {
    if (options === void 0) { options = {}; }
    var car = __assign({ manufacturer: manufacturer, modelName: modelName }, options // Spread the additional keyword arguments
    );
    return car;
}
// Call the function with required information and additional details
var carInfo = createCar('Toyota', 'Camry', { color: 'Blue', year: 2023 });
// Print the object to check the stored information
console.log(carInfo);
