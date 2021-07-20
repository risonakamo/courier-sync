interface MirrorItem
{
    name:string

    folder:boolean

    status:DiffStatus

    modifiedSizes:ValueDiff
    modifiedDates:ValueDiff
}

type DiffStatus="normal"|"modifed"|"errorModified"|"added"|"removed"

/** a change in a value */
interface ValueDiff
{
    base:string
    mirror:string
}