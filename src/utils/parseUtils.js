export const parseHeaderLink = (headerLink) => {
    try{
        return headerLink
            .split(',')
            .find(item => item.includes('next'))
            .split(';')[0]
            .replace(/<|>/g,'');
    } catch(err){
        console.log(`Error: ${err}`);
        
        return null;
    }
}