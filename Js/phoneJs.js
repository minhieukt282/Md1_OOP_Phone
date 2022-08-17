var today = new Date();
var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
var time = today.getHours() + ':' + today.getMinutes();
var dateTime = time + ' - ' + date;
document.getElementById("time").innerHTML = dateTime;// ----------------------------------------------------------------------------
{
    class Circle {
        x;
        y;
        radius;

        constructor(x, y, radius) {
            this.x = x;
            this.y = y;
            this.radius = radius;
        }


        getBlackColor() {
            return "rgb(0,0,0)";
        }

        getWhileColor() {
            return "rgb(255,255,255)";
        }
    }

    function createBlackCircle() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var circle = new Circle(150, 150, 150);
        var color = circle.getBlackColor();
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }

    function createWhileCircle() {
        var ctx = document.getElementById("myCanvas").getContext("2d");
        var circle = new Circle(150, 150, 150);
        var color = circle.getWhileColor();
        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, 2 * Math.PI);
        ctx.fillStyle = color;
        ctx.fill();
    }
} // ve hinh tron
// ----------------------------------------------------------------------------
class Phone {
    battery = 55;
    mess = " ";
    textArea;
    status = false;


    batteryState() {
        return this.battery + "%";
    }

    changeBattery() {
        this.battery--
        return this.batteryState();
    }

    chargeBattery() {
        this.battery++
        return this.batteryState();
    }

    checkStatus() {
        if (this.status === false) {
            console.log('Dien thoai dang tat')
            return this.batteryState()
        } else {
            console.log('Dien thoai dang bat')
            return this.changeBattery()
        }
    }

    setChangeStatus(status) {
        this.status = status
    }

    saveMess(mess) {
        this.mess = mess;
    }

    sentMess() {
        if (this.status === true) {
            if (this.mess) {
                console.log("da gui tin")
                console.log(this.mess)
                return this.changeBattery()
            }
            console.log("nhap noi dung tin nhan");
        } else console.log("bat dien thoai len")
    }
}

// ----------------------------------------------------------------------------

let mobile = new Phone();
mobile.setChangeStatus(true)

function onOffScreen() {
    let currentvalue = document.getElementById('onoff').value;
    if (currentvalue === "Off") {
        mobile.setChangeStatus(true)
        createWhileCircle()
        mobile.changeBattery()
        screenBattery();
        document.getElementById("onoff").value = "On";
    } else {
        mobile.setChangeStatus(false)
        createBlackCircle()
        document.getElementById("onoff").value = "Off";
    }
} //done

function screenBattery() {
    document.getElementById("battery").innerHTML = mobile.batteryState();
} //done

function chargeBattery() {
    if (mobile.battery === 100) console.log("ngat nguon sac");
    else {
        console.log("Dang sac ...")
        for (let i = 0; i < 100; i++) {
            if (mobile.battery === 100) {
                console.log("ngat nguon sac")
                break
            } else mobile.chargeBattery()
        }
    }
    screenBattery();
} //done

function saveMess() {
    var listMess = JSON.parse(localStorage.getItem("ListMess")) ?? [];
    let mess = document.getElementById("infoMess").value;
    mobile.saveMess(mess);
    if (mess) listMess.push(mess);
    localStorage.setItem("ListMess", JSON.stringify(listMess));
} //done

function sentMess() {
    saveMess();
    mobile.sentMess()
    screenBattery();
} //done

function readMess() {
    listMess = JSON.parse(localStorage.getItem("ListMess")) ?? [];
    for (let i = 0; i < listMess.length; i++) {
        console.log(listMess[i]);
    }
    mobile.changeBattery()
    screenBattery();
}

screenBattery();

