/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be? Array Objects
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT = [];
const CATEGORY = ["Fashion", "Gadget"];

let NFT_id = "000000";

function increment_NFT_ID(id) { // id -> string
    let new_num = parseInt(id) + 1;
    let new_NFT_id = String(new_num);
    
    while (new_NFT_id.length < id.length) {
        new_NFT_id = "0" + new_NFT_id;
    }
    return new_NFT_id;
}


// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (ID, NAME, CATEGORY) { // ID, NAME, CATEGORY -> string
    NFT.push({
        id: ID,
        name: NAME,
        category: CATEGORY,
    });

    NFT_id = increment_NFT_ID(ID);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for (let i = 0; i < NFT.length; i++) {
        console.log("Name    \t:", NFT[i].name);
        console.log("ID      \t:", NFT[i].id);
        console.log("Category\t:", NFT[i].category);
        console.log("---------------------------");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFT:", NFT.length);
}

// call your functions below this line
mintNFT(NFT_id, "Shirt", CATEGORY[0]);
mintNFT(NFT_id, "Dress", CATEGORY[0]);
mintNFT(NFT_id, "Tablet", CATEGORY[1]);
listNFTs();
getTotalSupply();
