function pcstore(arg1, arg2, arg3, arg4, arg5) {
    let processorDollars = Number(arg1);
    let videoCardDollars = Number(arg2);
    let ramMemoryDollars = Number(arg3);
    let usdToBgn = 1.57;
    let platkiRam = Number(arg4);
    let promo = Number(arg5);

    let bgnProcessor = processorDollars * usdToBgn;
    let bgnVideo = videoCardDollars * usdToBgn;
    let bgnRam = (ramMemoryDollars * platkiRam) * usdToBgn;
    let promoProcessor = bgnProcessor * promo;
    let processor = bgnProcessor - promoProcessor;
    let promoVideo = bgnVideo * promo;
    let video = bgnVideo - promoVideo;

    let result = processor + video + bgnRam;

    console.log(`Money needed - ${result.toFixed(2)} leva.`);

}
pcstore("500",
    "200",
    "80",
    "2",
    "0.05");