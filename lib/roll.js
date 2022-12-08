export function roll(sides, dice, rolls) {
    var results = [];
    for(let i = 0; i < rolls; i++) {
        let total = 0;
        for(let j = 0; j < dice; j++) {
            total = total + Math.floor(Math.random() * sides) + 1;
        }
        results.push(total);
    }
    return {'sides':sides, 'dice':dice, 'rolls':rolls, 'results':results};
}
