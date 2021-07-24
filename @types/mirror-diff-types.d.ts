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

/** recursive form of MirrorItems */
interface MirrorItemR
{
    name:string
    folder:boolean

    fullPath:string
    relPath:string
    parent:string
    parents:string[]

    items:MirrorItemR[]
}