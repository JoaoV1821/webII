var days;
(function (days) {
    days[days["DOMINGO"] = 0] = "DOMINGO";
    days[days["SEGUNDA"] = 1] = "SEGUNDA";
    days[days["TERCA"] = 2] = "TERCA";
    days[days["QUARTA"] = 3] = "QUARTA";
    days[days["QUINTA"] = 4] = "QUINTA";
    days[days["SEXTA"] = 5] = "SEXTA";
    days[days["SABADO"] = 6] = "SABADO";
})(days || (days = {}));
var dia = 1;
console.log(days[dia]);
