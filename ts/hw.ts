//imitate response from back test.json
interface Reply {
    userId: number,
    id: number,
    title: string,
    info: Info,
    tags: Tag[]
}

interface Info {
    desc: string,
    isActive: boolean
}

interface Tag {
    name: string,
    values: number
}