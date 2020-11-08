import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const thoughtDirectory = path.join(process.cwd(), 'subpages', 'thoughts')

export function getSortedThoughts(){
    const fileNames = fs.readdirSync(thoughtDirectory)
    const allThoughts = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, '')
        const fullPath = path.join(thoughtDirectory, fileName)
        const fileContent = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContent)
        return {
            id,
            ...matterResult.data
        }
    })

    return allThoughts.sort((a, b) => {
        if(a.date < b.date) {
            return 1
        } else { return -1 }
    })
}

export function getAllThoughtId(){
    const fileNames = fs.readdirSync(thoughtDirectory)

    return fileNames.map(fileName => {
        return{
            params: {
                id: fileName.replace(/\.md/, '')
            }
        }
    })
}

export async function getThoughtData(id){
    const fullPath = path.join(thoughtDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf-8')

    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)
    const content = processedContent.toString()

    return {
        id,
        content,
        ...matterResult.data
    }

}