#!/usr/bin/env node
// Function to log your details in the terminal
function logDetails() {
    const message = "\x1b[38;5;51m| \x1b[38;5;105mHey there! I'm Rahul, a full stack data scientis, currently working at     \x1b[38;5;51m|\
      \n    \x1b[38;5;51m| \x1b[38;5;105mFoundry Digital on the Decentralized AI team as the Principal AI Architect!\x1b[38;5;51m|";
    const twitterLink = "https://twitter.com/RahulKumaran4";
    const linkedinLink = "https://www.linkedin.com/in/rahul-arulkumaran/";
    const gscholarLink = "https://scholar.google.com/citations?user=nES7KiwAAAAJ";
    const topmateLink = "https://topmate.io/rahul_arulkumaran";
    const donateInstruction = "To donate, please send ETH to my wallet address: 0x4e2cc19317d23680aafe52189491d12f890c3c02";

    const boxWidth = 64; // Width of the colorful box
    const messageWidth = message.split('\n').reduce((max, line) => Math.max(max, line.length), 0); // Length of the longest line in the message
    const spacesCount = Math.max(0, Math.floor((boxWidth - messageWidth) / 2));

    // Create spaces for center alignment
    const spaces = " ".repeat(spacesCount);

    // Create a colorful box using ANSI escape codes
    const colorfulBox = `  \x1b[38;5;51m  +----------------------------------------------------------------------------+
    \x1b[38;5;105m${spaces}${message}\x1b[38;5;51m
    +----------------------------------------------------------------------------+
    | \x1b[38;5;93mTwitter:   \x1b[38;5;39m${twitterLink}                               \x1b[38;5;51m|
    | \x1b[38;5;93mLinkedIn:  \x1b[38;5;39m${linkedinLink}                  \x1b[38;5;51m|
    | \x1b[38;5;93mGoogle Scholar:  \x1b[38;5;39m${gscholarLink}    \x1b[38;5;51m|
    | \x1b[38;5;93mTopmate:   \x1b[38;5;39m${topmateLink}                            \x1b[38;5;51m|
    +----------------------------------------------------------------------------+\x1b[0m
\x1b[38;5;93m${donateInstruction}\x1b[0m`;
    

    // Log the colorful box in the terminal
    console.log(colorfulBox);
  }
// Call the function to log your details
logDetails();
