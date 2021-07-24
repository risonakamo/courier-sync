import {readdirSync,statSync,Stats} from "fs";
import {basename,resolve,join} from "path";

/** given a target directory, generate PreMirrorItems for all items in the dir, if an item is a
 *  folder will recursively fill up that item. if item is not dir, returns a single PreMirrorItem
 *  for the single item */
function getPreMirror(target:string,parent:string,parents:string[],
    relPath:string):PreMirrorItem[]|PreMirrorItem
{
    var targetStats:Stats=statSync(target);

    if (targetStats.isFile())
    {
        var name:string=basename(target);

        return {
            name,
            folder:false,

            modified:targetStats.mtimeMs,
            size:targetStats.size,

            fullPath:resolve(target),
            relPath:join(relPath,name),
            parent,
            parents,

            items:[]
        };
    }

    return [];
}

export function test1()
{
    console.log(getPreMirror("C:/Users/ktkm2/Desktop/web/courier-sync/package.json","",[],"."));
}