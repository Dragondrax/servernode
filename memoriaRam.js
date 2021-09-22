const os = require ('os');

setInterval(() => {
    const tRam = os.totalmem() / 1024 / 1024;
    const fRam = os.freemem() / 1024 / 1024;
    const usageRam = ((fRam / tRam) * 100).toFixed(2)

    const stats = {
        OS: `${os.platform()}`,
        Arch: `${os.arch()}`,
        TotalRam: `${parseInt(tRam)} MB`,
        FreeRam: `${parseInt(fRam)} MB`,
        UsageRam: `${usageRam} %`,
    };

    console.clear()
    console.table(stats);
    
    exports.stats = stats

}, 1000)



