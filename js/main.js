function loadpage(x) {
    let id = x;
    //console.log(id);
    let dataUrl = "https://opendata.cwb.gov.tw/api/v1/rest/datastore/F-C0032-001?Authorization=CWB-7CA9B5E5-395F-42CC-92A8-197AA3780FD7";

    $.ajax({
        url: dataUrl,
        type: "get",
        dataType: 'json',
        success: function (result, status) {
            //console.log('result', result);
            //console.log('status', status);
            let locationdata = result.records.location //各縣市完整資料
            //console.log(locationdata);
            let counts = locationdata.length //資料筆數
            //console.log(counts);
            let area = locationdata[id]; //選取地區
            //console.log(area);
            let areaname = locationdata[id].locationName //地區名1
            //console.log(areaname);
            let weatheerdata = locationdata[id].weatherElement //天氣資訊
            console.log(weatheerdata);
            //---------天氣現象 / weatheerdata[0]------------
            //開始時間
            let wxstart0 = weatheerdata[0].time[0].startTime; //2
            let wxstart1 = weatheerdata[0].time[1].startTime;
            let wxstart2 = weatheerdata[0].time[2].startTime;
            //結束時間
            let wxend0 = weatheerdata[0].time[0].endTime; //3
            let wxend1 = weatheerdata[0].time[1].endTime;
            let wxend2 = weatheerdata[0].time[2].endTime;
            //天氣狀態
            let parameterName0 = weatheerdata[0].time[0].parameter.parameterName; //4
            let parameterName1 = weatheerdata[0].time[1].parameter.parameterName;
            let parameterName2 = weatheerdata[0].time[2].parameter.parameterName;
            let parameterValue0 = weatheerdata[0].time[0].parameter.parameterValue; //參照代碼表 5
            let parameterValue1 = weatheerdata[0].time[1].parameter.parameterValue;
            let parameterValue2 = weatheerdata[0].time[2].parameter.parameterValue;
            //---------降雨率 / weatheerdata[1]------------
            let pop0 = weatheerdata[1].time[0].parameter.parameterName; // 百分比 6
            let pop1 = weatheerdata[1].time[1].parameter.parameterName;
            let pop2 = weatheerdata[1].time[2].parameter.parameterName;
            //---------最低溫度 / weatheerdata[2]------------
            let MinT0 = weatheerdata[2].time[0].parameter.parameterName; //7
            let MinT1 = weatheerdata[2].time[1].parameter.parameterName;
            let MinT2 = weatheerdata[2].time[2].parameter.parameterName;
            //---------最高溫度 / weatheerdata[4]------------
            let MaxT0 = weatheerdata[4].time[0].parameter.parameterName; //8
            let MaxT1 = weatheerdata[4].time[1].parameter.parameterName;
            let MaxT2 = weatheerdata[4].time[2].parameter.parameterName;

            hide();
            show0(areaname, wxstart0, wxend0, parameterName0, parameterValue0, pop0, MaxT0, MinT0);
            show1(areaname, wxstart1, wxend1, parameterName1, parameterValue1, pop1, MaxT1, MinT1);
            show2(areaname, wxstart2, wxend2, parameterName2, parameterValue2, pop2, MaxT2, MinT2);
        },
        error: function (xhr, status, error) {

        }


    });
}

function show0(area, start, end, condition, pen, percent, high, low) {
    let icon = "";
    switch (Number(pen)) {

        case 1:
            icon = "<i class='fa-solid fa-sun' text-warning></i>";
            break;
        case 2:
        case 3:
            icon = "<i class='fa-solid fa-cloud-sun text-warning'></i>";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            icon = "<i class='fa-solid fa-cloud text-secondary'></i>";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            icon = "<i class='fa-solid fa-cloud-rain text-primary'></i>";
            break;
        case 23:
        case 42:
            icon = "<i class='fa-solid fa-snowflake text-info'></i>";
            break;
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
            icon = "<i class='fa-solid fa-smog text-dark'></i>";
            break;
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
            icon = "<i class='fa-solid fa-cloud-showers-heavy text-primary'></i>";
            break;

        default:
            break;

    }
    console.log(pen);
    $('#hour0').append(`<h4 class='areaname0'>${area}</h4>`)
    $('#hour0').append(`<div class="row news0 mt-3"><div class="col-4 text-center wicon">${icon}</div><div class="col-8 text-center">${condition}</div></div>`)
    $('#hour0').append(`<div class="row probability0 mt-3"><div class="col-4 text-center wicon"><i class="fa-solid fa-umbrella text-danger"></i></div><div class="col-8 text-center">${percent}%</div></div>`)
    $('#hour0').append(`<div class="row temperh0 mt-3"><div class="col-6 text-center wicon"><i class="fa-solid fa-temperature-full text-danger"></i>${high}°C</div><div class="col-6 text-center wicon"><i class="fa-solid fa-temperature-empty text-primary"></i>${low}°C</div></div>`)
    $('#datetime0').append(`<p class="datestart0">${start}</p><p class="dateend0">${end}</p>`)
    $('#maindata').fadeIn(2000);
}
function show1(area, start, end, condition, pen, percent, high, low) {
    let icon = "";
    switch (Number(pen)) {

        case 1:
            icon = "<i class='fa-solid fa-sun text-warning'></i>";
            break;
        case 2:
        case 3:
            icon = "<i class='fa-solid fa-cloud-sun text-warning'></i>";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            icon = "<i class='fa-solid fa-cloud text-secondary'></i>";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            icon = "<i class='fa-solid fa-cloud-rain text-primary'></i>";
            break;
        case 23:
        case 42:
            icon = "<i class='fa-solid fa-snowflake text-info'></i>";
            break;
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
            icon = "<i class='fa-solid fa-smog text-dark'></i>";
            break;
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
            icon = "<i class='fa-solid fa-cloud-showers-heavy text-primary'></i>";
            break;

        default:
            break;

    }
    console.log(pen);
    $('#hour1').append(`<h4 class='areaname1'>${area}</h4>`)
    $('#hour1').append(`<div class="row news1 mt-3"><div class="col-4 text-center wicon">${icon}</div><div class="col-8 text-center">${condition}</div></div>`)
    $('#hour1').append(`<div class="row probability1 mt-3"><div class="col-4 text-center wicon"><i class="fa-solid fa-umbrella text-danger"></i></div><div class="col-8 text-center">${percent}%</div></div>`)
    $('#hour1').append(`<div class="row temperh1 mt-3"><div class="col-6 text-center wicon"><i class="fa-solid fa-temperature-full text-danger"></i>${high}°C</div><div class="col-6 text-center wicon"><i class="fa-solid fa-temperature-empty text-primary"></i>${low}°C</div></div>`)
    $('#datetime1').append(`<p class="datestart1">${start}</p><p class="dateend1">${end}</p>`)
    $('#maindata').fadeIn(2000);
}
function show2(area, start, end, condition, pen, percent, high, low) {
    let icon = "";
    switch (Number(pen)) {

        case 1:
            icon = "<i class='fa-solid fa-sun text-warning'></i>";
            break;
        case 2:
        case 3:
            icon = "<i class='fa-solid fa-cloud-sun text-warning'></i>";
            break;
        case 4:
        case 5:
        case 6:
        case 7:
            icon = "<i class='fa-solid fa-cloud text-secondary'></i>";
            break;
        case 8:
        case 9:
        case 10:
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
        case 21:
        case 22:
            icon = "<i class='fa-solid fa-cloud-rain text-primary'></i>";
            break;
        case 23:
        case 42:
            icon = "<i class='fa-solid fa-snowflake text-info'></i>";
            break;
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
            icon = "<i class='fa-solid fa-smog text-dark'></i>";
            break;
        case 29:
        case 30:
        case 31:
        case 32:
        case 33:
        case 34:
        case 35:
        case 36:
        case 37:
        case 38:
        case 39:
        case 40:
        case 41:
            icon = "<i class='fa-solid fa-cloud-showers-heavy text-primary'></i>";
            break;

        default:
            break;

    }
    console.log(pen);
    $('#hour2').append(`<h4 class='areaname2'>${area}</h4>`)
    $('#hour2').append(`<div class="row news2 mt-3"><div class="col-4 text-center wicon">${icon}</div><div class="col-8 text-center">${condition}</div></div>`)
    $('#hour2').append(`<div class="row probability2 mt-3"><div class="col-4 text-center wicon"><i class="fa-solid fa-umbrella text-danger"></i></div><div class="col-8 text-center">${percent}%</div></div>`)
    $('#hour2').append(`<div class="row temperh2 mt-3"><div class="col-6 text-center wicon"><i class="fa-solid fa-temperature-full text-danger"></i>${high}°C</div><div class="col-6 text-center wicon"><i class="fa-solid fa-temperature-empty text-primary"></i>${low}°C</div></div>`)
    $('#datetime2').append(`<p class="datestart2">${start}</p><p class="dateend2">${end}</p>`)
    $('#maindata').fadeIn(2000);
}

function hide() {
    $('.areaname0').remove();
    $('.areaname1').remove();
    $('.areaname2').remove();
    $('.news0').remove();
    $('.news1').remove();
    $('.news2').remove();
    $('.probability0').remove();
    $('.probability1').remove();
    $('.probability2').remove();
    $('.temperh0').remove();
    $('.temperh1').remove();
    $('.temperh2').remove();
    $('.datestart0').remove();
    $('.datestart1').remove();
    $('.datestart2').remove();
    $('.dateend0').remove();
    $('.dateend1').remove();
    $('.dateend2').remove();
    $('#maindata').fadeOut();
}


