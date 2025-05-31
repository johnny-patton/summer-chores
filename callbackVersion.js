function doSummerChores(name)
{
    mowYard(name, weedEat);
}

function mowYard(name, callback)
{
    //2000 ms
    setTimeout(() => { console.log(`${name} mowed the yard.`)
                        callback(name, weedEat)},2000);
}

function weedEat(name, callback)
{
    //1500 ms
    let didGetTired = Math.random() < 0.05;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after mowing the yard.`);
        exit;
    }
    else
    {
        setTimeout(() => { console.log(`${name} finished using the weedeater.`)
                        callback(name, trimHedges)},1500);
    }
}

function trimHedges(name, callback)
{
    //1000 ms
    let didGetTired = Math.random() < 0.05;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after weed eating the yard.`);
        exit;
    }
    else
    {
        setTimeout(() => { console.log(`${name} finished trimming the hedges.`)
                        callback(name, collectWood)},1000);
    }
}

function collectWood(name, callback)
{
    //2500 ms
    let didGetTired = Math.random() < 0.05;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after trimming the hedges.`);
        exit;
    }
    else
    {
        setTimeout(() => { console.log(`${name} finished collecting wood.`)
                        callback(name, waterGarden)},2500);
    }
}

function waterGarden(name, callback)
{
    //500 ms
    let didGetTired = Math.random() < 0.05;
    if (didGetTired)
    {
        console.log(`${name} fell asleep after collecting wood.`);
        exit;
    }
    else
    {
        setTimeout(() => { console.log(`${name} finished watering the garden.`)
                        callback(name, finishedChores)},500);
    }
}

function finishedChores(name)
{
    console.log(`${name} finished all their chores!`);
}

doSummerChores("Steve");
