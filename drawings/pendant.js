// chalk allows us to change output color :)
import chalk from 'chalk'

// draw a name pendant with length of n links on either side
function drawNecklace(links, name) {
    if (links % 1 !== 0) {
        console.log('Height must be an integer')
    }
    else {
        const nameLength = name.length
        const totalLength = links * 2 + nameLength
        let indent = 0
        let gap = totalLength - 2
        for (let i = 1; i <= links; i++) {
            console.log(' '.repeat(indent) + '\\' + ' '.repeat(gap) + '/')
            indent ++
            gap -= 2
        }
        console.log(' '.repeat(links) + chalk.red(name))
    }
}

drawNecklace(5, 'daddy')