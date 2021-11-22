const pad = (num: number) => {
    if (num < 10) return '0'+num;
    return ''+num;
}

export const trDate = (dateString: string, format="DD.mm.YYYY") => {
    try {
        const d = new Date(dateString);
        format.includes('DD') && (format = format.replace("DD", '' + pad(d.getDate())));
        format.includes('mm') && (format = format.replace("mm", pad(d.getMonth() + 1)));
        format.includes('YYYY') && (format = format.replace("YYYY", '' + d.getFullYear()));
        format.includes('HH') && (format = format.replace("HH", '' + pad(d.getHours())));
        format.includes('MM') && (format = format.replace("MM", '' + pad(d.getMinutes())));
        format.includes('SS') && (format = format.replace("SS", '' + pad(d.getSeconds())));

        return format;
    } catch(ex) {
        console.error(ex);
        return dateString;
    }
}