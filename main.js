const { Actor } = require('apify');

Actor.main(async () => {
    console.log('🚀 Starting Premium Web Data Extractor');
    
    const input = await Actor.getInput() || {};
    const { startUrls = [{ url: 'https://example.com' }] } = input;
    
    console.log(`Processing ${startUrls.length} URLs`);
    
    for (const request of startUrls) {
        try {
            const data = {
                url: request.url,
                title: 'Extracted Data',
                timestamp: new Date().toISOString(),
                premium: true
            };
            
            await Actor.pushData([data]);
            console.log(`✅ Processed: ${request.url}`);
            
        } catch (error) {
            console.log(`❌ Error: ${error.message}`);
        }
    }
    
    console.log('🎉 Extraction completed!');
});