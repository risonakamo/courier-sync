interface MirrorItem
{
    name:string
    folder:boolean
    level:number

    status:DiffStatus

    modifiedSizes:ValueDiff
    modifiedDates:ValueDiff
}

type DiffStatus="normal"|"modified"|"errorModified"|"added"|"removed"

/** a change in a value */
interface ValueDiff
{
    base:string
    mirror:string
}

/** directory item information before mirroring occurs */
interface PreMirrorItem
{
    name:string
    folder:boolean

    modified:number
    size:number

    fullPath:string
    relPath:string
    parent:string
    parents:string[]

    items:PreMirrorItem[]
}