import fs from 'fs'
import path from 'path'

const subPageDir = path.join(process.cwd(), 'pages', 'subpages');

export function getSubPageTitles(){
    const subPages = fs.readdirSync(subPageDir);
    const subPageData = subPages.map(subPages => {
        const id = subPages.replace(/\.js$/, '')
        return {
            id,
        }
    })
}