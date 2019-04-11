export default function cowcertsFilterAlert(html) {

    // NOOP
    if (!html || html === '') {
        return html;
    }


    // Parse
    let parser = new DOMParser();
    let parsedHtml = null;

    try {
        parsedHtml = parser.parseFromString(html, 'text/html');
    } catch (exception) {
        // Return same on fail
        console.error("Unable to parse HTML");
        return html;
    }

    // Modify
    let blockcertsAlertNode = parsedHtml.getElementById("alert-blockcerts");
    if (blockcertsAlertNode) {
        // TODO: This is a little bit matraco
        try {
            parsedHtml.body.children[0].removeChild(blockcertsAlertNode);
        } catch (exception) {
            console.error("Could not remove Blockcerts alert." +
                "Not in body > div :(");
        }
    }

    // Remove body and return
    return parsedHtml.body.innerHTML;
}
