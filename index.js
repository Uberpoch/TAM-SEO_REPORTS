const axios = require('axios');
const fs = require('fs');
const commandLineArgs = require('command-line-args');

// require('dotenv').config('.env');

const { auth } = require('./utils/auth');
const { getItemsLoop, getStreamsLoop } = require('./utils/loop');
const { writeStreams, writeItems } = require('./utils/write');

// const ogItems = require('./source');



const run = async(argv) => {
    const optionDefinitions = [
      { name: 'nocommit', type: Boolean },
      {
        name: 'key',
        type: String,
      },
      {
        name: 'sec',
        type: String,
      },
      {
        name: 'hub',
        type: String,
      },
      {
        name: 'file',
        type: String,
      },
    ];
  
    // defining commandline variables
    const options = commandLineArgs(optionDefinitions, { argv });
    let apiKey = options.key; //--key
    let apiSecret = options.sec; //--sec
    const hub = options.hub; //--hub
    const file = options.file; //--hub

    console.log(options);
    // warning for missing commandline arguments
    if (options.nocommit) {
      console.warn('--nocommit was supplied.');
    }
  
    if (apiKey === undefined ) {
      console.error('no apikey was supplied please follow this format $node index.js run --key ENTERAPIKEY --sec ENTERAPISEC --hub ENTERHUBID --file ENTERFILENAME');
      return;
    }
    if (apiSecret === undefined ) {
        console.error('no api secret was supplied please follow this format $node index.js run --key ENTERAPIKEY --sec ENTERAPISEC --hub ENTERHUBID --file ENTERFILENAME');
        return;
    }
    if (hub === undefined ) {
        console.error('no hub was supplied please follow this format $node index.js run --key ENTERAPIKEY --sec ENTERAPISEC --hub ENTERHUBID --file ENTERFILENAME');
    return;
    }
    if (file === undefined ) {
        console.error('no file name was supplied please follow this format $node index.js run --key ENTERAPIKEY --sec ENTERAPISEC --hub ENTERHUBID --file ENTERFILENAME');
    return;
    }
  
    // get all tags
    const token = await auth(apiKey, apiSecret);
    const streams = await getStreamsLoop(token, hub);
    const items = await getItemsLoop(token, hub);
    await writeStreams(streams, file);
    await writeItems(items, file);
    
    console.log('YOU DID IT');

  };

const main = () => {
    // These first few lines are just configuration
    const mainOptionDefinitions = [{ name: 'command', defaultOption: true }];
    const mainOptions = commandLineArgs(mainOptionDefinitions, {
      stopAtFirstUnknown: true,
    });
    const commandOptions = mainOptions._unknown || [];
    // Creates cases for the different commands you might pass
    switch (mainOptions.command) {
      // The case here refers to the COMMAND you pass after the file name
      case 'run':
        return run(commandOptions);
      default:
        // Will notify that no command was provided
        console.error(`Unknown command '${mainOptions.command}'.`);
        return null;
    }
  };
  
  main();


