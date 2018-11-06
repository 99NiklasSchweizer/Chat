XSS står för cross site scripting och är en typ av atttack som man kan urföra mot en webbplats.

Genom att använda .innerHTML i sin webbsida kan man injicera både html och script genom att skriva det på innerHTML som hämtar data och skriver ut det.
Det kan man dock slippa genom att använda sig utav .textContent istället för .innerHTML för textContent inte lägger till texten som data och istället lägger till det som helt vanlig text. XSS kkna användas då till att komma åt information som bör vara otillganlig, som t.ex. kreditkorts information osv.

Jag typ kopierar det mesta men jag förstår iallafall vad XSS är och vad det innebär. Don't hate.