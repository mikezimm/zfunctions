/***
 *    .d888b.  .d88b.  .d888b.  .d88b.          db .d888b.         db   j88D                     
 *    VP  `8D .8P  88. VP  `8D .8P  88.        o88 VP  `8D        o88  j8~88                     
 *       odD' 88  d'88    odD' 88  d'88         88    odD'         88 j8' 88                     
 *     .88'   88 d' 88  .88'   88 d' 88 C8888D  88  .88'   C8888D  88 V88888D                    
 *    j88.    `88  d8' j88.    `88  d8'         88 j88.            88     88                     
 *    888888D  `Y88P'  888888D  `Y88P'          VP 888888D         VP     VP                     
 *                                                                                               
 *                                                                                               
 *    d8888b. d888888b db    db  .d88b.  d888888b      d888888b d888888b db      d88888b .d8888. 
 *    88  `8D   `88'   88    88 .8P  Y8. `~~88~~'      `~~88~~'   `88'   88      88'     88'  YP 
 *    88oodD'    88    Y8    8P 88    88    88            88       88    88      88ooooo `8bo.   
 *    88~~~      88    `8b  d8' 88    88    88            88       88    88      88~~~~~   `Y8b. 
 *    88        .88.    `8bd8'  `8b  d8'    88            88      .88.   88booo. 88.     db   8D 
 *    88      Y888888P    YP     `Y88P'     YP            YP    Y888888P Y88888P Y88888P `8888Y' 
 *                                                                                               
 *                                                                                               
 */

export type IAnyArray = any[];

export const SampleComments = 'This item was created for sample purposes.  Please delete me before using!';

/**
 * https://stackoverflow.com/a/1527820
 * 
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 * Using Math.round() will give you a non-uniform distribution!
 */
export function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

/**
 * Gets a default number or a random chance to get number in range
 * @param def 
 * @param chanceOther Enter whole number for %....  chanceOther = 49 for 49% Chance of getting number outside of default
 * @param min 
 * @param max 
 */
export function getRandomChance(def: number, chanceOther: number, min: number, max: number,  ){

    let result = def;
    let thisChance = getRandomInt(1,100);
    //console.log('getRandomChance', thisChance);
    if ( thisChance <= chanceOther ) {
        //Get a randomized number instead of default
        return getRandomInt(min,max);
    } else {
        return def;
    }

}

export function getRandomFromArray(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
  
  
  export function generateVals ( qty, min, max ) {
    let vals = [];
    for (let i = 0; i < qty ; i++) {
      vals.push (  getRandomInt(min , max) );
    }
    return vals;
  }
  
  export function generateTitles ( lbl: string, qty: number ) {
    let titles = [];
    for (let i = 0; i < qty ; i++) {
      //https://stackoverflow.com/a/3145054
      var chr = String.fromCharCode(65 + i);
      titles.push (  lbl + ' - ' + chr );
    }
    return titles;
  }

/**
 * Items to create when privisioning the list
 * 
 * NOTE:   Always make the first item in the object be text that can be used to verify if the item was added.
 * 
 */

export const TMTDefaultProjectItems  = [
    { Title: "Training", Everyone: true, Story: 'Training', Chapter: 'Yet more training :)', Category1: { results: ['Training']}},
    { Title: "Category Column Error - not in results", Everyone: true, Story: 'Webpart', Chapter: 'Example', ProjectID1: 'mask=B\\atch99999', ProjectID2: 'My prefix:...', Category1: 'TestWebpart'},
    { TitleX: "Title Column Error", Everyone: true, Story: 'Webpart', Chapter: 'Example', ProjectID1: 'mask=B\\atch99999', ProjectID2: 'My prefix:...', Category1: { results: ['TestWebpart']}},
    { Title: "Email triage", Everyone: true, Story: 'Daily', Chapter: 'Email triage', Category1: { results: ['Daily']}},
    { Title: "Break", Everyone: true, Story: 'Daily', Chapter: 'Break', Category1: { results: ['Daily']}},
    { Title: "Team Meeting", Everyone: true, Story: 'Meetings', Chapter: 'Team Meeting', Category1: { results: ['Meetings']}},
    { Title: "Example for Mask and Prefix in ProjectID columns", Everyone: true, Story: 'Webpart', Chapter: 'Example', ProjectID1: 'mask=B\\atch99999', ProjectID2: 'My prefix:...', Category1: { results: ['TestWebpart']}},

];

export function createRandomTimeEntry(qty, user = null){

    let allItems : IAnyArray = [];

    const stories = ['Story A', 'Story B', 'Story C',null];
    const chapters = ['Chapter 1', 'Chapter 2', 'Chapter 3','Chapter 4', 'Chapter 5', 'Chapter 6',null];
    const category1s = ['Cat A', 'Cat B', 'Cat C']; 
    const category2s = ['Cat 1', 'Cat 2', 'Cat 3'];
    const entryTypes = ['manual','sinceLast','slider','start'];
    const location = ['Office','Customer','Home','Other'];

    for (let i = 0; i < qty ; i++) {
        let thisStory = getRandomFromArray(stories);
        let thisChapter = getRandomFromArray(chapters);

        let start = randomDate(new Date(2020, 0, 1), new Date());
        let randomMinutes = getRandomInt(20, 180) * 60 * 1000;
        let end = new Date(start.getTime() + randomMinutes);

        //Based on intial testing, ID 1 is an account, not a name, ID 2 Title is empty.
        let thisUser = user === null ? getRandomInt(3,8) : user;

        allItems.push({
            Title: 'Test for user: ' + thisUser + ' - ' + thisStory + ' - ' + thisChapter + ' # ' + i,
            UserId: thisUser,
            ProjectID1: 'Proj1: ' + getRandomInt(1,50),
            ProjectID2: 'Proj2: ' + getRandomInt(200,300),
            Story: thisStory,
            Chapter: thisChapter,
            StartTime: start.toLocaleString(),
            EndTime: end.toLocaleString(),
            Category1: { results: [getRandomFromArray(category1s)]},
            Category2: { results: [getRandomFromArray(category2s)]},
            EntryType: getRandomFromArray(entryTypes),
            OriginalStart: start.toLocaleString(),
            OriginalEnd: end.toLocaleString(),
            OriginalHours: randomMinutes / (60000 * 60) * 1 * ( 1 + getRandomChance(0, 30, -20,20)/100 ), // 15% chance that random minutes will be 10-20% higher than original
            Location: getRandomFromArray(location),
            Comments: SampleComments,
            Settings: ''

        });
    }
    return allItems;
}
