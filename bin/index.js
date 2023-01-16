#!/usr/bin/env node
'use strict';

const glob = require('glob');
const fs = require('fs');
const path = require('path');


const applySelectors = async (file, data, toReplace, selectors) => {
    

    selectors.forEach(selector => {
        const matcher = `${selector}${toReplace.from};`
        if(data.includes(matcher)) {
            // const regex = new RegExp(`\b(\:${matcher}\)b`, 'gmi');
            const regex = new RegExp(`${matcher}`, 'gmi');
            const replacedResult = data.replace(regex, `${selector}${toReplace.to};`);

                 fs.writeFile(file, replacedResult, 'utf8', function (err) {
                   if (err) throw err;
               });
        } else {
            console.log('No matches!');
        }
    });
}

const replaceInFile = (file, encoding, replace, selectors ) => {
    fs.readFile(file, encoding, (err, data) => {
        if (err) throw err;

        replace.forEach(toReplace => {
            
            applySelectors(file, data, toReplace, selectors);

            
        });
      });
};


const getStyleFiles = (config) => {
    const {files, encoding, replace, selectors} = config;

    glob.sync(files[0], { nodir: true }).forEach(file => {
        if(!file) {
            console.log('No file founds');
        } else {
            replaceInFile(file, encoding || 'utf8', replace, selectors);
        }
    });

};

const config = {
    files: ['src/**/*.scss'],
    selectors: [': ' ],
    replace: [
        {
            from: 'blue', 
            to: 'red'
        }
    ]
}

getStyleFiles(config);
