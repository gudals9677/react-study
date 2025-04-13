// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "pizza";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const newFood = `식은 ${food}`;
        callback(newFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const freezedFood = `냉동된 ${food}`;
        callback(freezedFood);
    },1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (newFood) => {
        console.log(newFood);

        freezeFood(newFood, (freezedFood) => {{
            console.log(freezedFood);
        }})
    })
})

function test(callback) {
    setTimeout(() => {
        const testName = "testName";
        callback(testName);
    })
}

test((test) => {
    console.log(test);
});