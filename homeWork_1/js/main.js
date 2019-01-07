var phone_1, phone_2, phone_3, phone_4, phone_5, phone_6;
var text_resp_1 = "Sorry! Press 'OK' and enter another one. Available now: ";
var text_resp_2 = "Enter the correct memory data!";

var phones = [
    phone_1 = {
        color: "black",
        memory: 8,
        price: 70
    },
    phone_2 = {
        color: "red",
        memory: 8,
        price: 100
    },
    phone_3 = {
        color: "white",
        memory: 16,
        price: 150
    },
    phone_4 = {
        color: "black",
        memory: 16,
        price: 200
    },
    phone_5 = {
        color: "yellow",
        memory: 16,
        price: 120
    },
    phone_6 = {
        color: "black",
        memory: 32,
        price: 170
    }
];

function isAvailableColorUnique(color) {
    var temp = [];
    for (var i = 0; i < phones.length; i++) {
        var str = " " + phones[i][color];
        temp[str] = true;
      }
    return Object.keys(temp);
}

function isAvailableMemoryByColor(color) {
    var temp = [];
    for (var i = 0; i < phones.length; i++) {
        if (phones[i]["color"] == color) {
            var str = " " + phones[i]["memory"];
            temp[str] = true;
        }
    }
    return Object.keys(temp);
}

while (true) {
    var color_resp = prompt("Enter color:");
    color_resp = color_resp.toLowerCase();
    var check_color = phones.some(function(item, index, array) {
        return (item["color"] == color_resp);
    });
    if (check_color) {
        stage_memory: while (true) {
            var memory_resp = Number(prompt("Enter memory:"));
            if (isNaN(memory_resp)) {
                alert(text_resp_2);
                continue stage_memory;
            }
            for (var i = 0; i < phones.length; i++) {
                if (phones[i]["color"] == color_resp && phones[i]["memory"] == memory_resp) {
                    alert("Price: " + phones[i]["price"] + "$");
                    break;
                } else if (i == (phones.length - 1)) {
                    alert(text_resp_1 + isAvailableMemoryByColor(color_resp) + "GB with " + color_resp);
                    continue stage_memory;
                } else if (!memory_resp) {
                    break;
                }
            }
            break;
        }
        break;
    } else {
        alert(text_resp_1 + isAvailableColorUnique("color"));
    }
}

