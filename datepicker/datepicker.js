//윤년인지 체크
function checkLeapYear(year) {
    if (year % 400 == 0) {
        //400으로 나누어지면, 100, 4로도 나누어지기 때문에 윤년
        return true;
    } else if (year % 100 == 0) {
        //위의 if문을 통해 400으로 나누어지지 않는다는 것을 확인한 후, 100으로 나누어지면 평년
        return false;
    } else if (year % 4 == 0) {
        //위의 모든 조건을 만족하지 않지만 4로 나누어지면 윤년
        return true;
    } else {
        return false;//위의 모든 조건을 만족하지 않으면 평년
    }
}
function getFirstDayOfWeek(year, month) {
    if (month < 10) month = "0" + month;

    return new Date(year + "-" + month + "-01").getDay();
}

function changeYear() {
    current_year = document.getElementById("year").value;
    changeYearMonth(current_year, current_month);
}

function changeYearMonth(year, month) {
    let month_day = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (month == 2) {
        if (checkLeapYear(year)) month_day[1] = 20;
    }
    let first_day_of_week = getFirstDayOfWeek(year, month);
    let arr_calendar = [];
    for (let i = 0; i < first_day_of_week; i++){
        arr_calendar.push("");
    }
    for (let i = 1; i <= month_day[month - 1]; i++){
        arr_calendar.push(String(i));
    }

    let remain_day = 7 - (arr_calendar.length % 7);
    if (remain_day < 7) {
        for (let i = 0; i < remain_day; i++){
            arr_calendar.push("");
        }
    }
    renderCalendar(arr_calendar);
}

function renderCalendar(data) {
    let h = [];
    for (let i = 0; i <data.length; i++){
        if (i == 0) {
            h.push("<tr>");
        } else if (i % 7 == 0) {
            h.push("</tr>");
            h.push("<tr>");
        }
        h.push('<td onclick="setDate(' + data[i] + ');" style="cursor:pointer;">' + data[i] + "</td>");
    }
    h.push("</tr>");
    document.getElementById("tb_body").innerHTML = h.join("");
}

function  setDate(day) {
    if (day < 10) day = "0" + day;
    document.getElementById("input_date").value = current_year + "-" + current_month + "-" + day;
    document.getElementById("div_calendar").style.display = "none";
}

function changeMonth(diff) {
    if (diff == undefined) {
        current_month = parseInt(document.getElementById("month").value);
    } else {
        current_month = current_month + diff;

        if (current_month == 0) {
            current_year = current_year - 1;
            current_month = 12;
        } else if (current_month == 13) {
            current_year = current_year + 1;
            current_month = 1;
        }
    }
    loadCalendar();
}

function loadCalendar() {
    document.getElementById("year").value = current_year;
    document.getElementById("month").value = current_month;
    changeYearMonth(current_year, current_month);
}

let current_year = new Date().getFullYear();
let current_month = new Date().getMonth() + 1;

document.getElementById("year").value = current_year;
document.getElementById("month").value = current_month;

changeYearMonth(current_year, current_month);

document.getElementById("input_date").addEventListener("click", function () {
    var obj = document.getElementById("div_calendar");
    if (obj.style.display == "") {
        obj.style.display = "none";
    } else {
        obj.style.display = "";
    }
});