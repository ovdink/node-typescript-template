import path from 'path';

const test = () => {
    const TEST = 0;

    console.log(TEST);
};

test();

// --------------------------

// test
console.log(path.join(__dirname, '/some_folder', path.basename(__filename)));
