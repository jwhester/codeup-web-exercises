"use strict";
function makeCar(make, model){
    return  {
        make: make,
        model: model
    };
}
console.log(makeCar('chevy', 'silverado'));


var salesReport = {title: "Monthly Sales Report",
    date: "03-17-2015",
    office: "Codeup",
    employees: [
        {employeeNumber: 1, firstName: "Jane", lastName: "Janeway", salesUnit: 3},
        {employeeNumber: 3, firstName: "Tricia", lastName: "Triciason", salesUnit: 5},
        {employeeNumber: 4, firstName: "Jeannette", lastName: "Jeanson", salesUnit: 4},
        {employeeNumber: 5, firstName: "Charles Emmerson III", lastName: "Winchester", salesUnit: 2},
        {employeeNumber: 6, firstName: "Chet", lastName: "Chedderson", salesUnit: 8},
        {employeeNumber: 7, firstName: "Chaiam", lastName: "Chaiamson", salesUnit: 12},
        {employeeNumber: 8, firstName: "Dale", lastName: "Dalesinger", salesUnit: 1},
        {employeeNumber: 9, firstName: "Zig", lastName: "Ziglar", salesUnit: 50},
        {employeeNumber: 10, firstName: "Henry", lastName: "Kissinger", salesUnit: 1},
        {employeeNumber: 11, firstName: "Arthur", lastName: "Fonzarelli", salesUnit: 23},
        {employeeNumber: 12, firstName: "Betty", lastName: "Boop", salesUnit: 67}]
};

salesReport.employees = function(count){
    alert(this.Array.length);
};
