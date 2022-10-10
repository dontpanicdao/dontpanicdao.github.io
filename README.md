# Description

This repository is a Fork.  
Stark-utils is a simple web application that aims at being a toolbox for Cairo developpers.  
It allows to:
- Converter: Convert any input to a felt, a string, the hexadecimal value, ...  
- L1->L2: Allows to compute the hash of a TX sent to L2 
- Signature: TBD 


## History (page removed)
- Status checker: Check the status of a Tx   
    Reason: Better using a block explorer
- Call function: Allows to call a specific contract at specific etry point with sepcific inputs  
    Reason: Better using a block explorer

## TODO list
 - L1->L2 page: using  
 https://stackoverflow.com/questions/72239816/checking-result-of-an-l1-l2-message-invoke-in-starknet  
 https://alpha4.starknet.io/feeder_gateway/get_transaction?transactionHash=0x56b7c13c0008f78d4cb4e39f993d7ed9921bf140f54966574d84d9c7dd80702
 - Figure out what does the page Signature and rename if needed and rework code
 - Page 404
 - Modal to explain each page
 - Update security, some packages are obsolete
 - Do "About" page with link to github
 - On convertor page would a global switch Dec <==> Hex be better?

## Dev Tools for StarkNet

***install dependencies***

```bash
yarn install
```

***serve local***

```bash
yarn serve
```

***build***

```bash
yarn build
```
For linux user replace ```yarn``` by ```npm run```