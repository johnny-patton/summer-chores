function doSummerChores(name)
{
    mowYard(name, () => {
        weedEat(name, () => {
            trimHedges(name, () => {
                collectWood(name, () => {
                    waterGarden(name, () => {
                        finishedChores(name);
                    });
                });
            });
        });
    });
}

function mowYard(name, callback)
{
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback();
        }, 2000);
}

function weedEat(name, callback)
{
    let didGetTired = Math.random() < 0.30;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after mowing the yard.`);
    }
    else
    {
        setTimeout(() => {
        console.log(`${name} finsihed using the weedeater.`);
        callback();
        }, 1500);
    }
}

function trimHedges(name, callback)
{
    let didGetTired = Math.random() < 0.25;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after weed eating the yard.`);
    }
    else
    {
        setTimeout(() => {
        console.log(`${name} finsihed trimming the hedges.`);
        callback();
        }, 1000);
    }
}

function collectWood(name, callback)
{
    let didGetTired = Math.random() < 0.35;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after trimming the hedges.`);
    }
    else
    {
        setTimeout(() => {
        console.log(`${name} finsihed collecting wood.`);
        callback();
        }, 2500);
    }
}

function waterGarden(name, callback)
{
    let didGetTired = Math.random() < 0.15;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after collecting wood.`);
    }
    else
    {
        setTimeout(() => {
        console.log(`${name} finsihed watering the garden.`);
        callback();
        }, 500);
    }
}

function finishedChores(name)
{
    console.log(`${name} finished all their chores!`);
}

doSummerChores("Steve");
