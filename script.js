function calculate(waterUsageDict, cropYieldDict, crop, acres){
    return waterUsageDict.crop * cropYieldDict.crop * acres;
}

const cropWaterUsage = {
    // Source: chrome-extension://efaidnbmnnnibpcajpcglclefindmkaj/https://hess.copernicus.org/articles/15/1577/2011/hess-15-1577-2011.pdf
    // Measurements in m^3/ton
    corn : 1222,
    wheat : 1827,
    soy: 2145,
    potatoes: 224,
    rice: 1673
}

const cropYieldsPerAcre = {
    corn: 4.14,
    wheat: 2.3,
    soy: 1.27,
    potatoes: 10,
    rice: 3.69
}