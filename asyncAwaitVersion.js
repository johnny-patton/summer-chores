async function doSummerChores(name)
{
    try
    {
        let mowYardResult = await mowYard(name);
        console.log(mowYardResult);

        let weedEatResult = await weedEat(name);
        console.log(weedEatResult);

        let trimHedgesResult = await trimHedges(name);
        console.log(trimHedgesResult);

        let collectWoodResult = await collectWood(name);
        console.log(collectWoodResult);

        let waterGardenResult = await waterGarden(name);
        console.log(waterGardenResult);

        finishedChores(name);
    }
    catch (error)
    {
        console.error(error);
    }
}

function mowYard(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`${name} mowed the yard.`);
        }, 2000);
    });
}

function weedEat(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let didGetTired = Math.random() < 0.30;
            if (didGetTired)
            {
                reject(`${name} fell asleep after mowing the yard.`);
            }
            else
            {
                resolve(`${name} finished using the weedeater.`);
            }             
        }, 1500);
    });
}

function trimHedges(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let didGetTired = Math.random() < 0.25;
            if (didGetTired)
            {
                reject(`${name} fell asleep after weed eating the yard.`);
            }
            else
            {
                resolve(`${name} finished trimming the hedges.`);
            }
        }, 1000);
    });
}

function collectWood(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let didGetTired = Math.random() < 0.35;
            if (didGetTired)
            {
                reject(`${name} fell asleep after trimming the hedges.`);
            }
            else
            {
                resolve(`${name} finished collecting wood.`);
            }
        }, 2500);
    });
}

function waterGarden(name)
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let didGetTired = Math.random() < 0.15;
            if (didGetTired)
            {
                reject(`${name} fell asleep after collecting wood.`);
            }
            else
            {
                resolve(`${name} finished watering the garden.`);
            }
        }, 500);
    });
}

function finishedChores(name)
{
    console.log(`${name} finished all their chores!`);
}

doSummerChores("Steve");
