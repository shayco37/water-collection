export class WaterAlgorithm{
    static calculate = (towers) => {
        const maxTowersRightScan = towers.reduceRight((maxTowersRightScan, tower) => {
            let arr = Array.isArray(maxTowersRightScan) ? maxTowersRightScan : [maxTowersRightScan];
            arr.unshift((tower > arr[0]) ? tower : arr[0]);
            return arr;
        });

        // now we scan from left to right aggregating water collected so far between left top most tower to
        // last max right tower seen in that position in the former scan
        return ((waterCollected = 0) => (waterLevels = [0]) => {
            towers.reduce((previous, current, index) => {
                let water = Math.max(Math.min(previous, maxTowersRightScan[index]) - towers[index], 0);
                waterCollected += water;
                waterLevels.push(water);
                return (previous > current) ? previous : current;
            });

            return {
                waterCollected,
                waterLevelsArr: waterLevels
            };
        })()()
    };
};
